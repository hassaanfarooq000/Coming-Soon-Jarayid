"use client";

import type { NormalizedTerms } from "../types/terms_type";

interface TermsContentProps {
    terms: NormalizedTerms;
}

const TermsContent = ({ terms }: TermsContentProps) => {
    return (
        <div className="min-h-screen bg-background">
            <main className="max-w-[900px] mx-auto px-4 lg:px-0 py-8 lg:py-16">
                <div className="text-center mb-6 lg:mb-2">
                    <h1 className="text-xl lg:text-2xl font-bold text-foreground lg:mb-4 mb-2 tracking-[0.0036em]">
                        {terms.title}
                    </h1>
                    <div className="mx-auto w-full max-w-[474px] h-auto lg:h-[57px] flex items-center justify-center">
                        <p className="text-sm lg:text-base text-[color:rgb(var(--page-description-text))] leading-[18px] lg:leading-6 tracking-[0.002em] lg:tracking-[0.0036em] text-center whitespace-pre-line">
                            {terms.introduction}
                        </p>
                    </div>
                </div>

                <div className="space-y-6 lg:space-y-8 pb-12 lg:pb-16">
                    {terms.sections.map((section, index) => (
                        <section key={section.id}>
                            <h2 className="text-lg lg:text-2xl font-bold text-foreground mb-3 lg:mb-2 tracking-[0.0036em] lg:tracking-[0.0038em]">
                                {index + 1}. {section.title}
                            </h2>
                            <p className="text-sm lg:text-base text-[color:rgb(var(--page-description-text))] leading-[18px] lg:leading-6 tracking-[0.002em] lg:tracking-[0.0036em] whitespace-pre-line">
                                {section.description}
                            </p>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
};

export type { TermsContentProps };
export { TermsContent };
export default TermsContent;


