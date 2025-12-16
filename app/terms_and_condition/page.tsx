import { notFound } from "next/navigation";
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

// Introduction is localized via messages: terms.introduction (keeps explicit line break)

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
        throw new Error("Failed to fetch terms and conditions");
    }

    if (!terms || !terms.title || terms.sections.length === 0) {
        notFound();
    }

    const resolvedTerms = terms;

    return <TermsContent terms={resolvedTerms} />;
};

export default TermsAndConditionPage;


