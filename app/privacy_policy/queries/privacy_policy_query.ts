import { fetchJson } from "@/lib/fetchJson";
import type { PrivacyPolicyApiResponse } from "../types/privacy_policy_type";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const getPrivacyPolicy = async () => {
    return fetchJson<PrivacyPolicyApiResponse>(
        `${API_URL}/admin-dashboard/getPrivacyDetail`,
        {
            cache: "no-store",
        }
    );
};


