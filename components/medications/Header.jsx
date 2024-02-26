import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
//
import HeroImage from '../../assets/pages/medications/header/hero-image.jpg';
//
import styles from './styles/header.module.scss';
import PrimaryButton from '../common/PrimaryButton';

export default function Header() {
  const { t } = useTranslation('common');

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.content}>
            <h1>{t('Medications.hero.title')}</h1>
            <p>{t('Medications.hero.paragraph')}</p>
            <PrimaryButton text={'Get Started'} link={'https://app.qilo.co/'} />
          </div>
          <div className={styles.image}>
            <Image src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </header>
  );
}
