import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
//
import Crosses from '../../assets/pages/about/mission/crosses.svg';
import Family from '../../assets/pages/about/mission/family.jpg';
import FamilyUS from '../../assets/pages/about/mission/family-us.webp';
import Heart from '../../assets/pages/about/mission/heart.svg';
//
import styles from './styles/mission.module.scss';
import LocalizedImage from '@/design-system/LocalizedImage';

export default function Mission() {
  const { t } = useTranslation('common');
  return (
    <section className={styles.mission}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.col}>
            <Image src={Crosses} className={styles.crosses} alt="decor" />
            <LocalizedImage
              srcus={FamilyUS}
              srcinitial={Family}
              className={styles.fullImg}
              alt="Weight Loss Pills"
            />
          </div>

          <div className={styles.col}>
            <Image src={Heart} className={styles.icon} alt="heart icon" />
            <h4>Our Mission</h4>
            <p>{t('AboutUs.mission.text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
