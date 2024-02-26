import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LocalizedImage from '@/design-system/LocalizedImage';
import { useTranslation } from 'next-i18next';
//
import Man from '../../assets/pages/program/howItWorks/man.svg';
import ManUS from '../../assets/pages/program/howItWorks/man-us.svg';
import Crown from '../../assets/pages/program/howItWorks/crown.svg';
import PrimaryOutlineButton from '../common/PrimaryOutlineButton';
import Spiral from '../../assets/pages/program/howItWorks/spiral.svg';
//
import styles from './styles/how-it-works.module.scss';

export default function HowItWorks() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  return (
    <section className={styles.howItWorks}>
      <Image src={Spiral} className={styles.spiral} alt="spiral decor" />

      <div className={styles.wrap}>
        <div className={styles.innerWrap}>
          <div className={styles.texts}>
            <h2>How does it work?</h2>
            <div className={styles.paragraph}>
              <p>{t('Program.howItWorks.one')}</p>
              <p>{t('Program.howItWorks.two')}</p>
            </div>
            <PrimaryOutlineButton
              text="Get Started"
              link={'https://app.qilo.co/'}
              customStyles={{ color: '#ffffff' }}
            />
          </div>

          <Image
            src={Crown}
            className={`${styles.crown} ${locale === 'en-US' ? styles.crown_us : ''}
          `}
            alt="crown image"
          />
          <LocalizedImage
            srcus={ManUS}
            srcinitial={Man}
            altinitial="Image of a man"
            classNameinitial={styles.man}
            classNameus={styles.man_us}
          />
        </div>
      </div>
    </section>
  );
}
