import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import Whiskers from '../../assets/pages/science/biology/whiskers.svg';
import Pills from '../../assets/pages/science/biology/weight-loss-pills.jpg';
import Meds from '../../assets/pages/science/biology/pills.svg';
import Woman from '../../assets/pages/science/biology/woman.svg';
import WomanUS from '../../assets/pages/science/biology/woman-us.svg';
import Flower from '../../assets/pages/science/biology/flower.svg';
import Crown from '../../assets/pages/science/biology/crown.svg';
//
import Fire from '../../assets/pages/science/biology/fire.svg';
import Hetro from '../../assets/pages/science/biology/hetro.svg';
import Worried from '../../assets/pages/science/biology/worried.svg';
//
import styles from './styles/biology-based.module.scss';

const LossWeight = [
  {
    icon: Fire,
    title: 'Your Metabolism',
    para: 'Understanding your metabolism and factors affecting it, is crucial; it determines how efficiently your body burns calories and influences your weight loss journey, making it a vital factor in your struggles.',
  },
  {
    icon: Hetro,
    title: 'Your Hormones',
    para: 'The expression of some hormones in your body could be the reason all your weight loss plans are failing, let’s help you figure it out. At Qilo, we recommend laboratory tests to see if you’re having any hormonal disorders such as thyroid hormones, and how they are contributing to your weight gain or inability to sustain weight loss.',
  },
  {
    icon: Worried,
    title: 'Your Psychology',
    para: 'Your mindset and emotional relationship with food are critical. Addressing psychological factors such as stress, emotional eating, and self-image is essential for sustainable weight loss success.',
  },
];

export default function BiologyBased() {
  const { t } = useTranslation('common');
  return (
    <section className={styles.biologyBased}>
      <div className={styles.firstSection}>
        <div className="container">
          <div className={styles.sectWrap1}>
            <div className={styles.heading}>
              <h2>Weight loss based on your Biology</h2>
            </div>
            <div className={styles.left}>
              {LossWeight.map((loss, index) => (
                <div className={styles.row} key={index}>
                  <div className={styles.icon}>
                    <Image src={loss.icon} alt="icon" />
                  </div>

                  <div className={styles.texts}>
                    <h5>{loss.title}</h5>
                    <p>{loss.para}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* */}
            <LocalizedImage
              srcinitial={Woman}
              srcus={WomanUS}
              classNameinitial={styles.woman}
              classNameus={styles.woman_us}
              altinitial="woman's image"
            />
            <Image src={Flower} alt="decor" className={styles.flower} />
            <Image src={Crown} alt="decor" className={styles.crown} />
          </div>
        </div>
      </div>

      <div className={styles.secondSection}>
        <div className="container">
          <div className={styles.sectWrap2}>
            <div className={styles.col}>
              <Image src={Whiskers} className={styles.whiskers} alt="decor" />
              <Image
                src={Pills}
                className={styles.fullImg}
                alt="Weight Loss Pills"
              />
            </div>
            <div className={styles.col}>
              <Image src={Meds} className={styles.icon} alt="medication icon" />
              <h4>
                Medication-assisted
                <br /> Weight Loss
              </h4>
              <p>{t('Science.medication.text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
