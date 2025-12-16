import { fetchJson } from "@/lib/fetchJson";
import type { TermsApiResponse } from "../types/terms_type";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const getTermsAndConditions = async () => {
    return fetchJson<TermsApiResponse>(`${API_URL}/admin-dashboard/termsCondition`, {
        next: { revalidate: 0 } // Cache for 1 hour, then revalidate
    });
};


