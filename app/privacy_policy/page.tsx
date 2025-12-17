import dynamic from 'next/dynamic';

import { getPrivacyPolicy } from './queries/privacy_policy_query';
import type { NormalizedPrivacyPolicy } from './types/privacy_policy_type';
import { Spinner } from '@/components/ui/spinner';

const PrivacyPolicyContent = dynamic(
  () => import('./components/privacy-policy-content').then((mod) => mod.PrivacyPolicyContent),
  {
    loading: () => (
      <div className="min-h-screen bg-background">
        <div className="flex justify-center items-center min-h-[400px]"><Spinner className="size-8 text-blue-500" /></div>
      </div>
    ),
  }
);

const STATIC_PRIVACY_POLICY: NormalizedPrivacyPolicy = {
  title: "Privacy Policy",
  introduction: "At Jarayid, your privacy matters to us.\nThis Privacy Policy explains how we collect, use, and protect your personal information when you use our website and mobile applications.\nBy using Jarayid, you agree to the practices described here.",
  sections: [
    {
      id: 5,
      title: "Privacy Policy Overview",
      description: "This policy outlines how we collect, store, and safeguard user information within our systems."
    },
    {
      id: 6,
      title: "Data Collection",
      description: "We collect personal data such as name, email, and usage behavior to improve our services."
    },
    {
      id: 7,
      title: "Use of Information",
      description: "Collected data is used to enhance user experience, personalize content, and ensure service security."
    },
    {
      id: 8,
      title: "Data Sharing",
      description: "We do not share personal data with third parties except when legally required or with user consent."
    },
    {
      id: 9,
      title: "Data Retention",
      description: "User data is retained only for as long as necessary to fulfill the purposes described in this policy."
    },
    {
      id: 10,
      title: "User Rights",
      description: "Users have the right to access, modify, or delete their personal information at any time."
    },
    {
      id: 11,
      title: "Cookies Policy",
      description: "We use cookies to enhance performance and analyze user interactions on our platform."
    },
    {
      id: 12,
      title: "Third-Party Services",
      description: "Our platform may contain links or integrations with third-party services that have their own privacy policies."
    },
    {
      id: 13,
      title: "Data Security Measures",
      description: "We implement advanced security measures to prevent unauthorized access, disclosure, or destruction of user data."
    }
  ]
};

const PrivacyPolicy = async () => {
  let policy: NormalizedPrivacyPolicy | null = null;

  try {
    const api = await getPrivacyPolicy();

    if (api?.responseType === 'success' && api.privacyData) {
      const { title, introduction, section } = api.privacyData;

      const sections = Array.isArray(section)
        ? section.map((item, index) => ({
          id: item.ID ?? index,
          title: item.TITLE,
          description: item.DESCRIPTION,
        }))
        : [];

      policy = {
        title: title,
        introduction: introduction,
        sections: sections.filter((sectionItem) => Boolean(sectionItem.title) && Boolean(sectionItem.description)),
      };
    }
  } catch {
    // If API fails, use static content as fallback
    policy = STATIC_PRIVACY_POLICY;
  }

  // Use static content if API didn't return valid data
  if (!policy || !policy.title || !policy.introduction) {
    policy = STATIC_PRIVACY_POLICY;
  }

  const resolvedPolicy = policy;

  return <PrivacyPolicyContent policy={resolvedPolicy} />;
};

export default PrivacyPolicy;