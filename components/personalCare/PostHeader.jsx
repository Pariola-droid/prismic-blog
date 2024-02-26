import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { newLine } from '@/utils/formatLineBreaks';
//
import Human1 from '../../assets/pages/personal-care/pre-header/human1.svg';
import Decor1 from '../../assets/pages/personal-care/pre-header/decor1.svg';
import Decor2 from '../../assets/pages/personal-care/pre-header/decor2.svg';
//
import styles from './styles/pre-header.module.scss';

export default function PreHeader() {
  const { t } = useTranslation('common');
  return (
    <section className={styles.preHeader}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.col}>
            <div className={styles.colWrap}>
              <div className={styles.content}>
                <h4>{t('Personalized.postHeader.title')}</h4>
                <p>{newLine(t('Personalized.postHeader.text'))}</p>
              </div>
              {/*  */}
              <div className={styles.imgWrap}>
                <Image
                  src={Decor1}
                  className={styles.decor}
                  alt="decor - illustration"
                  data-animation="rotate-up"
                />
                <Image
                  src={Human1}
                  className={styles.img}
                  alt="human illustration"
                />
                <Image
                  src={Decor2}
                  className={styles.decor}
                  alt="decor - illustration"
                  data-animation="rotate-down"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
