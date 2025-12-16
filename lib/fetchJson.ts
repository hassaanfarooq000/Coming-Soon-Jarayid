export async function fetchJson<T = unknown>(
  input: RequestInfo | URL,
  init: RequestInit = {}
): Promise<T> {
  // Always start from caller-provided headers but enforce safe JSON defaults
  const headers = new Headers(init.headers || {});

  // Ensure JSON request when a body is present (unless caller explicitly overrides)
  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  // Automatically forward auth cookies from server context:
  // - For backend API calls (NEXT_PUBLIC_API_URL): forward JWT as `jwt` cookie
  // - For same-origin internal calls (e.g. /api/auth/session): forward full cookie header
  const urlString = typeof input === "string" ? input : input.toString();
  const isBackendApiCall = urlString.startsWith(process.env.NEXT_PUBLIC_API_URL || "");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const isSameOriginInternalCall =
    (!!siteUrl && urlString.startsWith(siteUrl)) ||
    (!urlString.startsWith("http://") && !urlString.startsWith("https://") && urlString.startsWith("/"));

  if (isBackendApiCall || isSameOriginInternalCall) {
    try {
      // Dynamic import to avoid bundling cookies() in client code
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();

      if (isBackendApiCall) {
        const token = cookieStore.get("auth_token")?.value;
        if (token && !headers.has("Cookie")) {
          // Forward JWT as `jwt` cookie (backend's expected format)
          headers.set("Cookie", `jwt=${token}`);
        }
      } else if (isSameOriginInternalCall && !headers.has("Cookie")) {
        // Mirror browser behaviour for internal routes: forward all cookies
        const cookieHeader = cookieStore
          .getAll()
          .map(({ name, value }) => `${name}=${value}`)
          .join("; ");
        if (cookieHeader) {
          headers.set("Cookie", cookieHeader);
        }
      }
    } catch {
      // Not in server context (e.g., client component) - cookies() will throw
      // In browser, credentials: "include" handles cookies automatically
    }
  }

  // Always include cookies so that HttpOnly JWT cookies are sent when running in the browser.
  // In non-browser environments (Node), this is ignored by fetch implementations.
  const finalInit: RequestInit = {
    ...init,
    headers,
    credentials: init.credentials ?? "include",
  };

  const res = await fetch(input, finalInit);

  const contentType = res.headers.get("content-type") || "";
  const text = await res.text().catch(() => "");

  let body: unknown = null;
  if (text) {
    // Only attempt JSON parsing – we never want to treat HTML or other formats as structured data.
    if (contentType.includes("application/json") || contentType.includes("+json")) {
      try {
        body = JSON.parse(text);
      } catch {
        // Malformed JSON from backend – treat as protocol error
        const err = new Error(
          `Invalid JSON received from ${typeof input === "string" ? input : input.toString()}`
        ) as Error & { status?: number; body?: unknown };
        err.status = res.status;
        err.body = text;
        throw err;
      }
    } else {
      // Unexpected content-type for non-empty body; surface as a hard error to avoid unsafe use.
      const err = new Error(
        `Unexpected content-type "${contentType}" from ${
          typeof input === "string" ? input : input.toString()
        }`
      ) as Error & { status?: number; body?: unknown };
      err.status = res.status;
      err.body = text;
      // Even if status is 2xx, this is considered an application error.
      throw err;
    }
  }

  if (!res.ok) {
    const message =
      body &&
      typeof body === "object" &&
      ("message" in body || "error" in body)
        ? (body as { message?: string; error?: string }).message ||
          (body as { message?: string; error?: string }).error
        : `HTTP ${res.status}`;

    const err = new Error(message) as Error & { status?: number; body?: unknown };
    err.status = res.status;
    err.body = body ?? text;
    throw err;
  }

  // Successful response with no body
  return body as T;
}

