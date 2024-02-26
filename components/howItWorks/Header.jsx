import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
//
import PrimaryButton from '../common/PrimaryButton';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import FloatingContainer from '../common/header/FloatingContainer';
import ArrowHead from '../../assets/pages/home/header/arrow-head.svg';
import HeroImage from '../../assets/pages/how-it-works/header/hero-image.webp';
import HeroImageUS from '../../assets/pages/how-it-works/header/hero-image-us.webp';
import HeartIcon from '../../assets/pages/how-it-works/header/heart-icon.svg';
//
import styles from './styles/header.module.scss';

export default function Header() {
  const { t } = useTranslation('common');

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.left}>
            <h1>{t('HowItWorks.hero.title')}</h1>
            <p>{t('HowItWorks.hero.paragraph')}</p>

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
                backgroundColor: '#FFECDB',
              }}
              caption={t('HowItWorks.hero.image-text')}
              icon={HeartIcon}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
