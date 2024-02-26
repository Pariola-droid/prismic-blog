import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import Twisted from '../../assets/pages/home/six-pillars/twisted.svg';
import Man from '../../assets/pages/home/six-pillars/man.webp';
import ManUS from '../../assets/pages/home/six-pillars/man-us.webp';
import Woman from '../../assets/pages/home/six-pillars/woman.webp';
import WomanUS from '../../assets/pages/home/six-pillars/woman-us.webp';
import Icon1 from '../../assets/pages/home/six-pillars/icon1.svg';
import Icon2 from '../../assets/pages/home/six-pillars/icon2.svg';
import Icon3 from '../../assets/pages/home/six-pillars/icon3.svg';
import Icon4 from '../../assets/pages/home/six-pillars/icon4.svg';
import Icon5 from '../../assets/pages/home/six-pillars/icon5.svg';
import Icon6 from '../../assets/pages/home/six-pillars/icon6.svg';
//
import styles from './styles/six-pillars.module.scss';

export default function SixPillars() {
  const { t } = useTranslation('common');

  const Pillars = [
    {
      icon: Icon1,
      title: `${t('Homepage.sixPillars.pillar.one.title')}`,
      paragraph: `${t('Homepage.sixPillars.pillar.one.text')}`,
    },
    {
      icon: Icon2,
      title: 'Movement',
      title: `${t('Homepage.sixPillars.pillar.two.title')}`,
      paragraph: `${t('Homepage.sixPillars.pillar.two.text')}`,
    },
    {
      icon: Icon3,
      title: `${t('Homepage.sixPillars.pillar.three.title')}`,
      paragraph: `${t('Homepage.sixPillars.pillar.three.text')}`,
    },
    {
      icon: Icon4,
      title: `${t('Homepage.sixPillars.pillar.four.title')}`,
      paragraph: `${t('Homepage.sixPillars.pillar.four.text')}`,
    },
    {
      icon: Icon5,
      title: `${t('Homepage.sixPillars.pillar.five.title')}`,
      paragraph: `${t('Homepage.sixPillars.pillar.five.text')}`,
    },
    {
      icon: Icon6,
      title: `${t('Homepage.sixPillars.pillar.six.title')}`,
      paragraph: `${t('Homepage.sixPillars.pillar.six.text')}`,
    },
  ];
  return (
    <section className={styles.sixPillars}>
      <Image
        src={Twisted}
        className={styles.illy_spiral}
        alt="Spiral"
        data-animation="twisted-down"
      />
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.head}>
            <h2>
              {t('Homepage.sixPillars.title.a')}
              <span>
                {t('Homepage.sixPillars.title.highlight')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="365"
                  height="88"
                  viewBox="0 0 365 88"
                  fill="none"
                >
                  <path
                    d="M356.81 76.3498C359.616 56.3154 363.877 28.6882 359.015 9.16767C275.953 7.77772 193.129 6.8343 110.003 8.14126C78.4596 8.63727 44.4637 12.8503 13.0924 10.2671C14.2645 28.1737 14.3004 46.0567 15.2741 63.936C15.6729 71.2581 19.3047 79.0814 18.2163 86.3998C111.227 85.8953 204.313 79.784 297.388 81.9616C315.228 82.3792 333.258 80.4358 351.093 81.971C304.06 79.107 255.97 81.5969 208.833 82.0253C177.319 82.3118 145.798 78.8875 114.172 79.0549C84.2686 79.2133 54.3965 83.4974 24.5788 83.2154C17.381 57.4597 8.00042 31.2452 3.38307 5.15754C22.388 4.87102 41.369 2.97198 60.3418 2.85999C161.337 2.26364 262.203 3.27158 363.074 6.20982C362.901 29.3002 355.386 51.5869 353.436 74.4419C350.743 50.6853 357.486 26.8946 355.593 3.21189C343.17 1.14486 328.677 2.52088 316.028 2.36625C282.694 1.95836 249.706 1.476 216.373 2.20708C174.45 3.12633 132.729 4.50833 90.8126 5.86191C62.0822 6.7894 30.046 5.08051 1.78391 9.97719C4.71439 35.1326 8.193 60.2964 11.5345 85.4066"
                    stroke="#36B887"
                    strokeWidth="3.07389"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{' '}
              {t('Homepage.sixPillars.title.b')}
            </h2>
          </div>

          <div className={styles.innerWrapper}>
            <div className={styles.left}>
              <LocalizedImage
                srcus={ManUS}
                srcinitial={Man}
                className={styles.man}
                altinitial="illustration of a man"
              />
              <LocalizedImage
                srcus={WomanUS}
                srcinitial={Woman}
                className={styles.woman}
                altinitial="illustration of a woman"
              />
            </div>

            <div className={styles.right}>
              {Pillars.map((pillar, index) => (
                <div className={styles.row} key={index}>
                  <div className={styles.icon}>
                    <Image src={pillar.icon} alt="icon" />
                  </div>
                  <div className={styles.copies}>
                    <h4>{pillar.title}</h4>
                    <p>{pillar.paragraph}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
