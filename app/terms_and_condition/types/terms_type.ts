export interface TermsSectionItem {
    ID: number | string;
    SUBJECT: string;
    VALUE: string;
    ARABIC_SUBJECT?: string | null;
    ARABIC_VALUE?: string | null;
}

export interface TermsApiResponse {
    responseType: "success" | "error" | string;
    message?: string;
    data?: TermsSectionItem[];
}

export interface NormalizedTermsSection {
    id: number | string;
    title: string;
    description: string;
}

export interface NormalizedTerms {
    title: string;
    introduction: string;
    sections: NormalizedTermsSection[];
}


