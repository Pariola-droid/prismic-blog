import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import Heart from '../../assets/pages/home/help/heart.svg';
import Female from '../../assets/pages/home/help/female.webp';
import FemaleUS from '../../assets/pages/home/help/female-us.webp';
import Icon1 from '../../assets/pages/home/help/icon1.svg';
import Icon2 from '../../assets/pages/home/help/icon2.svg';
import Icon3 from '../../assets/pages/home/help/icon3.svg';
import Icon4 from '../../assets/pages/home/help/icon4.svg';
//
import styles from './styles/help.module.scss';
import PrimaryOutlineButton from '../common/PrimaryOutlineButton';

export default function Help() {
  const { t } = useTranslation('common');

  const Helper = [
    {
      img: Icon1,
      title: `${t('Homepage.help.point.one.title')}`,
      paragraph: `${t('Homepage.help.point.one.paragraph')}`,
    },
    {
      img: Icon2,
      title: `${t('Homepage.help.point.two.title')}`,
      paragraph: `${t('Homepage.help.point.two.paragraph')}`,
    },
    {
      img: Icon3,
      title: `${t('Homepage.help.point.three.title')}`,
      paragraph: `${t('Homepage.help.point.three.paragraph')}`,
    },
    {
      img: Icon4,
      title: `${t('Homepage.help.point.four.title')}`,
      paragraph: `${t('Homepage.help.point.four.paragraph')}`,
    },
  ];

  return (
    <section className={styles.help}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.imgWrap}>
            <LocalizedImage
              srcus={FemaleUS}
              srcinitial={Female}
              className={styles.female}
              altinitial="illustration of a happy woman"
            />
            <Image
              src={Heart}
              className={styles.heart}
              alt="qilo user"
              priority
              data-animation="scale-out"
            />
          </div>

          <div className={styles.left}>
            <h2>{t('Homepage.help.title')}</h2>
            <p>
              Shed 10% off your current weight and gain new healthy habits to
              keep the weight off.
            </p>
            <PrimaryOutlineButton
              text="Learn more about Qilo"
              customStyles={{
                color: '#043D3B',
              }}
            />
          </div>

          <div className={styles.right}>
            {Helper.map((helps, index) => (
              <div className={styles.row} key={index}>
                <div className={styles.icon}>
                  <Image src={helps.img} alt="icon" />
                </div>
                <div className={styles.copies}>
                  <h4>{helps.title}</h4>
                  <p>{helps.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
