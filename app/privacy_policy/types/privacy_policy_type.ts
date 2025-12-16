export interface PrivacyPolicySectionItem {
    ID: string | number;
    TITLE: string;
    DESCRIPTION: string;
    ARABICTITLE?: string | null;
    ARABICDESCRIPTION?: string | null;
}

export interface PrivacyPolicyRecord {
    title: string;
    introduction: string;
    arabictitle?: string | null;
    arabicintroduction?: string | null;
    section?: PrivacyPolicySectionItem[];
}

export interface PrivacyPolicyApiResponse {
    responseType: "success" | "error" | string;
    message?: string;
    privacyData?: PrivacyPolicyRecord;
}

export interface NormalizedPrivacyPolicySection {
    id: string | number;
    title: string;
    description: string;
}

export interface NormalizedPrivacyPolicy {
    title: string;
    introduction: string;
    sections: NormalizedPrivacyPolicySection[];
}


export interface PrivacyPolicyContentProps {
    policy: NormalizedPrivacyPolicy;
  }
