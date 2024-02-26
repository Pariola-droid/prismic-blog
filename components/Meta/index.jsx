import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

// fixe en-EN-US
export default function MetaData({ customMeta }) {
  const router = useRouter();
  const { locale, pathname } = router;
  const [pInterestCode, setPInterestCode] = useState(null);

  const { t } = useTranslation('common');

  const meta = {
    // image: 'https://qilo.vercel.app/meta-image.png',
    type: 'website',
    ...customMeta,
  };

  const currentLocale = locale;
  const upperCaseCurrentLocale = currentLocale.toUpperCase();
  const currentPathWithLocale = `${currentLocale}${pathname}`;

  useEffect(() => {
    if (locale === 'en-US') {
      setPInterestCode('2008c2bbb6b31b99104ad878d69e9c90');
    } else {
      setPInterestCode(null);
    }
  }, [locale, pathname, router]);

  return (
    <Head>
      <title>
        {meta?.title
          ? `${meta?.title} | ${t('Meta.title')}`
          : `Qilo | ${t('Meta.title')}`}
      </title>
      <meta
        name="description"
        content={
          meta?.description
            ? `${meta?.description}`
            : `${t('Meta.description')}`
        }
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="robots" content="follow, index" />
      <meta name="keyword" content="Qilo, Qilo health, Weight loss" />
      <meta name="author" content="Qilo" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#75FB4C"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#75FB4C"
      />

      <link rel="canonical" href={`https://qilo.co${router.asPath}`} />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://qilo.co${router.asPath}`}
      />
      <link
        rel="alternate"
        hrefLang={`en-${upperCaseCurrentLocale}`} //check this
        href={`https://qilo.co/${currentPathWithLocale}`}
      />
      {/*  */}
      <meta name="p:domain_verify" content={pInterestCode} />
      {/* */}
      <meta property="og:url" content={`https://qilo.co${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Qilo" />
      <meta
        property="og:description"
        content={
          meta?.description ? `${meta.description}` : `${t('Meta.description')}`
        }
      />
      <meta
        property="og:title"
        content={
          meta?.title
            ? `${meta?.title} | ${t('Meta.title')}`
            : `Qilo | ${t('Meta.title')}`
        }
      />
      <meta
        property="og:image"
        content={
          meta?.image ? meta?.image : 'https://qilo.vercel.app/meta-image.png'
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@qilohealth" />
      <meta
        name="twitter:title"
        content={
          meta?.title
            ? `${meta?.title} | ${t('Meta.title')}`
            : `Qilo | ${t('Meta.title')}`
        }
      />
      <meta
        name="twitter:description"
        content={
          meta?.description ? `${meta.description}` : `${t('Meta.description')}`
        }
      />
      <meta
        name="twitter:image"
        content={
          meta?.image ? meta?.image : 'https://qilo.vercel.app/meta-image.png'
        }
      />
      {/*  */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
    </Head>
  );
}
