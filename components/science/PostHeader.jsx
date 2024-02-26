import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import Check from '../Icons/CheckIcon';
import Image1 from '../../assets/pages/science/postHeader/image1.svg';
import Image1US from '../../assets/pages/science/postHeader/image1-us.svg';
import Image2 from '../../assets/pages/science/postHeader/image2.svg';
import Decor1 from '../../assets/pages/science/postHeader/bulb.svg';
import Decor2 from '../../assets/pages/science/postHeader/star.svg';
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
              <h3>
                It&apos;s not what you
                <br /> think
              </h3>
              <p>
                Scientific research has shown that a healthy weight is beyond
                what people eat or do.
                <br />
                <br />
                There are hormonal, biological, metabolic, and psychological
                factors that contribute to your weight.
              </p>
            </div>

            <div className={styles.imgWrap}>
              <Image
                src={Decor1}
                className={styles.decor}
                alt="decor"
                data-animation="scale-in"
              />
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
              <h3>
                Go beyond the
                <br /> surface
              </h3>
              <p>
                Healthy weight is addressed from the inside out. When you deal
                with what’s going on at the cellular level, it shows physically.
              </p>
            </div>

            <div className={styles.imgWrap}>
              <Image
                src={Decor2}
                className={styles.decor}
                alt="decor"
                data-animation="down-up"
              />
              <Image src={Image2} className={styles.img} alt="human images" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
