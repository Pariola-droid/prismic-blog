import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
//
import PrimaryButton from '../common/PrimaryButton';
import HumanImage1 from '../../assets/pages/about/header/human1.webp';
import HumanImage2 from '../../assets/pages/about/header/human2.webp';
import HumanImage3 from '../../assets/pages/about/header/human3.webp';
import HumanImage4 from '../../assets/pages/about/header/human4.webp';
import HumanImage5 from '../../assets/pages/about/header/human5.webp';
import HumanImage1Us from '../../assets/pages/about/header/human1-us.webp';
import HumanImage2Us from '../../assets/pages/about/header/human2-us.webp';
import HumanImage3Us from '../../assets/pages/about/header/human3-us.webp';
import HumanImage4Us from '../../assets/pages/about/header/human4-us.webp';
import HumanImage5Us from '../../assets/pages/about/header/human5-us.webp';
import leftWhiskers from '../../assets/pages/about/header/left-whiskers.svg';
import rightWhiskers from '../../assets/pages/about/header/right-whiskers.svg';
import useWindowSize from '@/utils/useWindowSize';
//
import styles from './styles/header.module.scss';

const HangerImages = [
  HumanImage1,
  HumanImage1Us,
  HumanImage2,
  HumanImage2Us,
  HumanImage3,
  HumanImage3Us,
  HumanImage4,
  HumanImage4Us,
  HumanImage5,
  HumanImage5Us,
];

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');
  const windowSize = useWindowSize();
  const screenSizeThreshold = 768;
  const [showWavyLine, setShowWavyLine] = useState(false);

  const filteredImages = HangerImages?.filter((image) => {
    const imageSrc = image?.src;
    if (locale === 'en-US') {
      return imageSrc?.includes('us');
    } else {
      return !imageSrc?.includes('us');
    }
  });

  useEffect(() => {
    if (windowSize.width < screenSizeThreshold) {
      setShowWavyLine(true);
    } else {
      setShowWavyLine(false);
    }

    return () => {
      setShowWavyLine(false);
    };
  }, [windowSize]);

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Image
          src={leftWhiskers}
          className={styles.lw}
          alt="whisker like decor"
        />
        <div className={styles.content}>
          <h1>
            {t('AboutUs.hero.title')}
            <span>
              <svg
                width="279"
                height="91"
                viewBox="0 0 279 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M272.478 78.4113C274.616 57.8015 277.862 29.381 274.158 9.29983C210.877 7.86996 147.777 6.89945 84.4471 8.24394C60.4156 8.75419 34.5158 13.0883 10.6154 10.4309C11.5084 28.8517 11.5357 47.2482 12.2775 65.641C12.5814 73.1734 15.3483 81.2214 14.5191 88.75C85.3798 88.231 156.298 81.9442 227.207 84.1843C240.799 84.6139 254.535 82.6147 268.122 84.194C232.29 81.2477 195.652 83.8092 159.741 84.2498C135.732 84.5446 111.718 81.022 87.6235 81.1942C64.8413 81.3571 42.083 85.7642 19.3664 85.4741C13.8827 58.9788 6.73607 32.0114 3.21833 5.17453C17.6973 4.87978 32.1581 2.9262 46.6125 2.81099C123.556 2.19752 200.401 3.23441 277.25 6.25703C277.118 30.0105 271.393 52.9373 269.908 76.4487C267.856 52.0098 272.993 27.5359 271.551 3.17301C262.086 1.04661 251.045 2.46215 241.408 2.30308C216.013 1.88348 190.88 1.38726 165.485 2.13933C133.546 3.08498 101.761 4.50668 69.8268 5.89912C47.9385 6.85325 23.5315 5.09529 2 10.1326C4.2326 36.0104 6.88279 61.8969 9.42852 87.7282"
                  stroke="#36B887"
                  strokeWidth="3.07478"
                  strokeMiterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t('AboutUs.hero.titleSpan')}
            </span>
          </h1>
          <p>{t('AboutUs.hero.paragraph')}</p>
          <PrimaryButton text="Get Started" link={'https://app.qilo.co/'} />
        </div>
        <Image
          src={rightWhiskers}
          className={styles.rw}
          alt="whisker like decor"
        />
      </div>

      <div className={styles.slider}>
        {showWavyLine ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="430"
            height="70"
            viewBox="0 0 430 70"
            fill="none"
            className={styles.line}
          >
            <path
              d="M1.79925 21.4289C1.79925 21.4289 63.2099 65.1081 105.285 67.6645C157.855 70.8586 309.965 -1.03437 362.542 2.01413C390.289 3.62294 432.118 23.314 432.118 23.314"
              stroke="#043D3B"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeDasharray="6 6"
            />
          </svg>
        ) : (
          <svg
            width="1438"
            height="90"
            viewBox="0 0 1438 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.line}
          >
            <path
              d="M0.697904 2.64328C0.697904 2.64328 294.41 76.8926 491.882 86.5459C738.612 98.6072 1441.37 11.3208 1688.11 23.1638C1818.32 29.4138 2017 64.8373 2017 64.8373"
              stroke="#043D3B"
              strokeWidth="4.5"
              strokeLinejoin="round"
              strokeDasharray="18 18"
            />
          </svg>
        )}

        <div className={styles.spree}>
          {filteredImages.map((image, index) => (
            <div className={styles.hanger} key={index}>
              <Image
                src={image}
                alt="Qilo happy user illustration"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
