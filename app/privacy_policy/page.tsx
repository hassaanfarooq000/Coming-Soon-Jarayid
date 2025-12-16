import { notFound } from 'next/navigation';
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
    throw new Error('Failed to fetch privacy policy');
  }

  if (!policy || !policy.title || !policy.introduction) {
    notFound();
  }

  const resolvedPolicy = policy;

  return <PrivacyPolicyContent policy={resolvedPolicy} />;
};

export default PrivacyPolicy;