import { useRouter, Router } from 'next/router';
import nProgress from 'nprogress';
import { useEffect, useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import { detectLocale } from '../utils/detectLocale';
import * as ga from '../lib/ga';
import { nunito_sans, gilroy, made_mirage } from '../utils/fonts';
//
import '@/styles/globals.scss';
import 'blaze-slider/dist/blaze.css';
//

//Router events
// Router.events.on('routeChangeStart', nProgress.start);
// Router.events.on('routeChangeError', nProgress.done);
// Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps, detectedLocale }) {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: detectedLocale });
  }, [detectedLocale]);

  return (
    <main
      className={`${nunito_sans.className} ${gilroy.variable}  ${made_mirage.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  const detectedLocale = await detectLocale(ctx.req);
  return { detectedLocale };
};

export default appWithTranslation(MyApp);
