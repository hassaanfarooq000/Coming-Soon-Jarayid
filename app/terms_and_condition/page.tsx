import dynamic from "next/dynamic";

import { getTermsAndConditions } from "./queries/terms_query";
import type { NormalizedTerms } from "./types/terms_type";
import { Spinner } from "@/components/ui/spinner";

const TermsContent = dynamic(
    () => import("./components/terms-content").then((mod) => mod.TermsContent),
    {
        loading: () => (
            <div className="min-h-screen bg-background">
                <div className="flex justify-center items-center min-h-[400px]"><Spinner className="size-8 text-blue-500" /></div>
            </div>
        ),
    }
);

// Static English Terms and Conditions content
const STATIC_TERMS: NormalizedTerms = {
    title: "Terms and Conditions",
    introduction: "By accessing or using our platform, you agree to comply with these Terms and Conditions. Please read them carefully \n before using our services.",
    sections: [
        {
            id: 29,
            title: "Use of the Platforms",
            description: "Jarayid provides access to news articles aggregated from multiple verified sources. You may use the platform for personal, non-commercial purposes only and agree not to misuse or disrupt its functionality."
        },
        {
            id: 30,
            title: "Content Ownership",
            description: "All content, including text, images, and trademarks displayed on Jarayid, are the property of their respective owners. Jarayid does not claim ownership of third-party news articles and provides them solely for informational purposes."
        },
        {
            id: 31,
            title: "User Responsibilities",
            description: "You are responsible for how you use the platform. Please refrain from any activity that could harm, disable, or interfere with the app's operation or other users' experience."
        },
        {
            id: 32,
            title: "Privacy",
            description: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information."
        },
        {
            id: 33,
            title: "Third-Party Links",
            description: "Jarayid may contain links to external websites or sources. We are not responsible for the content, policies, or practices of these third parties."
        },
        {
            id: 34,
            title: "Modifications",
            description: "Jarayid reserves the right to update or modify these terms at any time. Continued use of the platform after updates means you accept the revised terms."
        },
        {
            id: 35,
            title: "Termination",
            description: "We may suspend or terminate your access to Jarayid if you violate these Terms and Conditions or engage in any activity deemed harmful or unlawful."
        },
        {
            id: 36,
            title: "Contact Us",
            description: "For any questions or concerns regarding these terms, please reach out to us through the Contact Us section on our website or app."
        }
    ]
};

const TermsAndConditionPage = async () => {
    let terms: NormalizedTerms | null = null;

    try {
        const api = await getTermsAndConditions();

        if (api?.responseType === "success" && Array.isArray(api.data)) {
            const sections = api.data
                .map((item, index) => {
                    const title = item.SUBJECT;
                    const description = item.VALUE;

                    return {
                        id: item.ID ?? index,
                        title,
                        description,
                    };
                })
                .filter(
                    (section) => Boolean(section.title) && Boolean(section.description)
                );

            terms = {
                title: "Terms and Conditions",
                introduction: "By accessing or using our platform, you agree to comply with these Terms and Conditions. Please read them carefully \n before using our services.",
                sections,
            };
        }
    } catch {
        // If API fails, use static content as fallback
        terms = STATIC_TERMS;
    }

    // Use static content if API didn't return valid data
    if (!terms || !terms.title || terms.sections.length === 0) {
        terms = STATIC_TERMS;
    }

    const resolvedTerms = terms;

    return <TermsContent terms={resolvedTerms} />;
};

export default TermsAndConditionPage;