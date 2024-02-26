import localFont from '@next/font/local';
import { Nunito_Sans } from '@next/font/google';

export const nunito_sans = Nunito_Sans({
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  variable: '--font-nunito-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const gilroy = localFont({
  variable: '--font-gilroy',
  src: [
    {
      path: '../public/fonts/gilroy/gilroy-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy/gilroy-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy/gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy/gilroy-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy/gilroy-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy/gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy/gilroy-Extrabold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy/gilroy-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const made_mirage = localFont({
  variable: '--font-made-mirage',
  src: [
    {
      path: '../public/fonts/made-mirage/made-mirage-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/made-mirage/made-mirage.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/made-mirage/made-mirage-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/made-mirage/made-mirage-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/made-mirage/made-mirage-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});
