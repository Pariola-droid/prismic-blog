import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { newLine } from '@/utils/formatLineBreaks';
//
import Spiral from '../../assets/pages/home/not-qilo/spiral.svg';
import Icon1 from '../../assets/pages/home/not-qilo/icon1.svg';
import Icon1US from '../../assets/pages/home/not-qilo/icon1-us.svg';
import Icon2 from '../../assets/pages/home/not-qilo/icon2.svg';
import Icon2US from '../../assets/pages/home/not-qilo/icon2-us.svg';
import Icon3 from '../../assets/pages/home/not-qilo/icon3.svg';
import Icon3US from '../../assets/pages/home/not-qilo/icon3-us.svg';
import Icon4 from '../../assets/pages/home/not-qilo/icon4.svg';
import Icon4US from '../../assets/pages/home/not-qilo/icon4-us.svg';
//
import styles from './styles/not-qilo.module.scss';

export default function NotQilo() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  const NotQiloDataUS = [
    {
      icon: Icon1US,
      title: newLine(t('Homepage.notQilo.one.title')),
      text: newLine(t('Homepage.notQilo.one.text')),
    },
    {
      icon: Icon2US,
      title: newLine(t('Homepage.notQilo.two.title')),
      text: newLine(t('Homepage.notQilo.two.text')),
    },
    {
      icon: Icon3US,
      title: newLine(t('Homepage.notQilo.three.title')),
      text: newLine(t('Homepage.notQilo.three.text')),
    },
    {
      icon: Icon4US,
      title: newLine(t('Homepage.notQilo.four.title')),
      text: newLine(t('Homepage.notQilo.four.text')),
    },
  ];

  const NotQiloDataAfrica = [
    {
      icon: Icon1,
      text: newLine(t('Homepage.notQilo.one')),
    },
    {
      icon: Icon2,
      text: newLine(t('Homepage.notQilo.two')),
    },
    {
      icon: Icon3,
      text: newLine(t('Homepage.notQilo.three')),
    },
    {
      icon: Icon4,
      text: newLine(t('Homepage.notQilo.four')),
    },
  ];

  return (
    <section className={styles.notQilo}>
      <div className="container">
        <div className={styles.wrap}>
          <Image src={Spiral} className={styles.illy_spiral} alt="Spiral" />
          <h2>
            {t('Homepage.notQilo.title')}
            <span>
              {t('Homepage.notQilo.titleSpan')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="104"
                height="13"
                viewBox="0 0 104 13"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M103.166 4.54264C102.747 3.12796 99.1465 2.53232 88.3259 2.03594C78.2292 1.56438 66.4752 0.199336 45.939 0.943902C30.2415 1.51474 10.6959 3.79807 10.6959 5.06384C10.6959 5.98214 11.4579 6.00695 18.7351 5.18793C25.4599 4.44337 28.908 4.26963 33.1181 4.07108C16.2395 6.00695 12.639 7.27272 3.64729 8.48885C-1.99161 9.25823 1.3041 11.4671 3.36153 11.2437C3.38058 11.2437 29.6129 8.46403 32.0894 8.61294C32.318 8.63776 29.8224 9.0845 26.5267 9.60569C17.3254 11.0948 19.0971 13.5765 25.9933 12.4348C49.1966 8.58787 71.0282 7.39656 87.8497 9.05943C93.1647 9.58062 93.7553 9.58062 93.7553 8.93533C93.7553 7.79366 92.3074 6.92526 90.0404 6.75152C86.4971 6.4537 72.8571 5.60961 66.6848 5.36142C66.2085 5.3366 66.4371 4.86529 66.8562 4.81565C69.3709 4.493 89.3356 4.74094 97.1843 5.08841C102.957 5.3366 103.376 5.31202 103.166 4.54264Z"
                  fill="#5F4086"
                />
              </svg>
            </span>
          </h2>

          <div className={styles.grid}>
            {locale === 'en-US' ? (
              <Fragment>
                {NotQiloDataUS.map((item, index) => (
                  <div className={styles.row} key={index}>
                    <div className={styles.icon}>
                      <Image src={item.icon} alt="icon" />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                {NotQiloDataAfrica.map((item, index) => (
                  <div className={styles.row} key={index}>
                    <div className={styles.icon}>
                      <Image src={item.icon} alt="icon" />
                    </div>
                    <h5>{item.text}</h5>
                  </div>
                ))}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
