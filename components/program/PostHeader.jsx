import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import Check from '../Icons/CheckIcon';
import Image1 from '../../assets/pages/program/postHeader/image1.svg';
import Image1US from '../../assets/pages/program/postHeader/image2-us.svg';
import Image2 from '../../assets/pages/program/postHeader/image2.svg';
import Image2US from '../../assets/pages/program/postHeader/image1-us.svg';
import Decor1 from '../../assets/pages/program/postHeader/crosses.svg';
import Decor2 from '../../assets/pages/program/postHeader/twisted.svg';
//
import styles from './styles/post-header.module.scss';

export default function PostHeader() {
  const { t } = useTranslation('common');

  return (
    <section className={styles.postHeader}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.col}>
            <div className={styles.textWrap}>
              <h3>{t('Program.postHeader.one.title')}</h3>
              <p>
                {t('Program.postHeader.one.texts.one')}
                {t('Program.postHeader.one.texts.two')}
              </p>
            </div>

            <Image src={Decor1} className={styles.decor} alt="decor" />

            <div className={styles.imgWrap}>
              <LocalizedImage
                srcinitial={Image1}
                srcus={Image1US}
                classNameinitial={styles.img}
                classNameus={styles.img_us}
                altinitial="human images"
                altus="human images"
              />
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.textWrap}>
              <h3>{t('Program.postHeader.two.title')}</h3>
              <ul>
                <li>
                  <Check />
                  <span>Non-alcoholic fatty liver disease (NAFLD))</span>
                </li>
                <li>
                  <Check />
                  <span>Polycystic Ovarian Syndrome (PCOS)</span>
                </li>
                <li>
                  <Check />
                  <span>Prediabetes</span>
                </li>
                <li>
                  <Check />
                  <span>Obesity</span>
                </li>
              </ul>
            </div>

            <Image
              src={Decor2}
              className={styles.decor}
              alt="decor"
              data-animation="twisted-up"
            />
            <div className={styles.imgWrap}>
              <LocalizedImage
                srcinitial={Image2}
                srcus={Image2US}
                classNameinitial={styles.img}
                classNameus={styles.img_us}
                altinitial="human images"
                altus="human images"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
