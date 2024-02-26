import Layout from '@/Layout';
import { useRouter } from 'next/router';
//
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PrimaryButton from '@/components/common/PrimaryButton';

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <PrimaryButton text="Go to blog" onClick={() => router.push('/blog')} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ locale }) {
  const translations = await serverSideTranslations(locale || 'en-US', [
    'common',
  ]);

  return {
    props: {
      ...translations,
    },
  };
}
