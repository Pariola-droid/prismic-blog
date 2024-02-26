import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
//
import PrimaryButton from '../common/PrimaryButton';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import FloatingContainer from '../common/header/FloatingContainer';
import ArrowHead from '../../assets/pages/home/header/arrow-head.svg';
import HeroImage from '../../assets/pages/science/header/hero-image.webp';
import HeroImageUS from '../../assets/pages/science/header/hero-image-us.webp';
import PillsIcon from '../../assets/pages/science/header/pills-icon.svg';
//
import styles from './styles/header.module.scss';
import { newLine } from '@/utils/formatLineBreaks';

export default function Header() {
  const { t } = useTranslation('common');

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.left}>
            <h1>{newLine(t('Science.hero.title'))}</h1>
            <p>{newLine(t('Science.hero.paragraph'))}.</p>

            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="447"
                height="94"
                viewBox="0 0 447 94"
                fill="none"
              >
                <path
                  d="M344.776 13.4684C273.775 -4.93649 137.265 -1.76812 67.1984 14.3857C35.2884 21.7427 -23.5498 43.0475 12.2657 63.1283C18.5826 66.6702 26.2606 69.5467 34.2042 72.0352C121.627 99.4218 243.545 96.5846 337.353 80.1441C351.343 77.6921 365.11 74.7824 377.775 70.8299C387.248 67.8738 396.405 64.2108 403.781 59.9372C425.372 47.4265 419.726 34.8462 396.487 24.2551C369.543 11.9755 332.702 8.18059 297.941 6.10764C267.545 4.29504 237.187 3.95599 206.647 4.71155C149.373 6.12837 83.369 8.37354 35.3387 25.1932C14.3603 32.5397 -8.17539 48.23 9.81382 60.9157C29.3075 74.6619 75.261 79.0985 106.17 81.9893C189.552 89.7883 321.479 85.8575 397.419 65.2834C405.608 63.0647 413.905 60.9968 421.23 58.0805C427.018 55.7762 432.56 53.1491 437.367 50.3064C471.435 30.1604 395.394 17.5293 368.577 15.3652C284.215 8.55734 159.354 -1.266 81.6701 16.9554"
                  stroke="#36B887"
                  strokeWidth="1.5"
                  strokeMiterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {newLine(t('Science.hero.title2'))}
            </h3>

            <div className={styles.leftBottom}>
              <PrimaryButton text="Get Started" link={'https://app.qilo.co/'} />
              <Image
                src={ArrowHead}
                className={styles.arrow}
                alt="arrow illustration"
                data-animation="hero-arrow"
              />
            </div>
          </div>

          <div className={styles.right}>
            <LocalizedImage
              srcus={HeroImageUS}
              srcinitial={HeroImage}
              className={styles.heroImage}
              altus="hero illustration"
              priority
            />

            <FloatingContainer
              customStyles={{
                backgroundColor: '#EEE0FF',
              }}
              caption={t('Science.hero.image-text')}
              icon={PillsIcon}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
