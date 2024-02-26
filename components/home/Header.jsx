import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
//
import PrimaryButton from '../common/PrimaryButton';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import FloatingContainer from '../common/header/FloatingContainer';
import ArrowHead from '../../assets/pages/home/header/arrow-head.svg';
import CrownIcon from '../../assets/pages/program/header/crown-icon.svg';
import HeroImage from '../../assets/pages/home/header/hero-image.webp';
import HeroImageUS from '../../assets/pages/home/header/hero-image-us.webp';
//
import styles from './styles/header.module.scss';

export default function Header() {
  const { t } = useTranslation('common');

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.left}>
            <h1>{t('Homepage.hero.title')}</h1>
            <p>{t('Homepage.hero.paragraph')}</p>

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
              placeholder="blur"
            />
            <FloatingContainer
              customStyles={{
                backgroundColor: '#F3F4DC',
              }}
              caption={t('Homepage.hero.image-text')}
              icon={CrownIcon}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
