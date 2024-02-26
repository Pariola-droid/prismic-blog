import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
//
import HangerDecor from './HangerDecor';
import CrazySvgShape from './CrazyShape';
import CrazyShapeMobile from './CrazyShapeMobile';
import PrimaryButton from '../common/PrimaryButton';
import LocalizedImage from '@/design-system/LocalizedImage';
import Decor from '../../assets/pages/personal-care/header/decor.svg';
import HappyQiloers from '../../assets/pages/personal-care/header/happy-qiloers.webp';
import HappyQiloersUS from '../../assets/pages/personal-care/header/happy-qiloers-us.webp';
import useWindowSize from '@/utils/useWindowSize';
//
import styles from './styles/header.module.scss';

export default function Header() {
  const { t } = useTranslation('common');
  const windowSize = useWindowSize();
  const screenSizeThreshold = 990;
  const [showCrazyShape, setShowCrazyShape] = useState(false);

  useEffect(() => {
    if (windowSize.width < screenSizeThreshold) {
      setShowCrazyShape(true);
    } else {
      setShowCrazyShape(false);
    }

    return () => {
      setShowCrazyShape(false);
    };
  }, [windowSize]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <h1>
              Your body, your Journey, <br />
              your results
            </h1>
            <p>{t('Personalized.hero.text')}</p>
            <PrimaryButton text="Get Started" link={'https://app.qilo.co/'} />

            <div className={styles.hanger}>
              <HangerDecor className={styles.hangerDecor} />
              <Image
                src={Decor}
                alt="decor"
                className={styles.decor}
                data-animation="scale-in"
              />
              <div className={styles.hangerWrap}>
                <LocalizedImage
                  srcus={HappyQiloersUS}
                  srcinitial={HappyQiloers}
                  altus="Happy Qiloers"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.crazyShape}>
        {showCrazyShape ? <CrazyShapeMobile /> : <CrazySvgShape />}
      </div>
    </header>
  );
}
