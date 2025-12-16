"use client";

import type { PrivacyPolicyContentProps } from "../types/privacy_policy_type";
const PrivacyPolicyContent = ({ policy }: PrivacyPolicyContentProps) => {
  return (
    <div className="min-h-screen bg-background overflow-y-auto">
      <main className="max-w-[900px] mx-auto px-4 lg:px-0 py-8 lg:py-16">
        <div className="text-center mb-6 lg:mb-8">
          <h1 className="text-xl lg:text-2xl font-bold text-foreground mb-2 tracking-[0.0036em]">
            {policy.title}
          </h1>
          <p className="text-sm lg:text-base text-[color:rgb(var(--page-description-text))] leading-[18px] lg:leading-6 tracking-[0.002em] lg:tracking-[0.0036em] max-w-[368px] lg:max-w-[750px] mx-auto whitespace-pre-line">
            {policy.introduction}
          </p>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {policy.sections.map((section, index) => (
            <section key={section.id}>
              <h2 className="text-lg lg:text-2xl font-bold text-foreground mb-3 lg:mb-4 tracking-[0.0036em] lg:tracking-[0.0038em]">
                {index + 1}. {section.title}
              </h2>
              <p className="text-sm text-justify lg:text-base text-[color:rgb(var(--page-description-text))] leading-[18px] lg:leading-6 tracking-[0.002em] lg:tracking-[0.0036em] whitespace-pre-line">
                {section.description}
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export type { PrivacyPolicyContentProps };
export { PrivacyPolicyContent };
export default PrivacyPolicyContent;