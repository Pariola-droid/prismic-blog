import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
//
import Thumb from '../../assets/pages/home/four-grid/thumb.svg';
import Male from '../../assets/pages/home/four-grid/male.webp';
import MaleUS from '../../assets/pages/home/four-grid/male-us.webp';
import Vector from '../../assets/pages/home/four-grid/vector.svg';
import Female from '../../assets/pages/home/four-grid/female.webp';
import FemaleUS from '../../assets/pages/home/four-grid/female-us.webp';
import Sketch from '../../assets/pages/home/four-grid/sketch.svg';
import Person from '../../assets/pages/home/four-grid/person.svg';
//
import styles from './styles/four-grid.module.scss';
import LocalizedImage from '@/design-system/LocalizedImage';

export default function FourGrid() {
  const { t } = useTranslation('common');
  return (
    <section className={styles.fourGrid}>
      <div className={styles.wrap}>
        <div className={styles.col}>
          <div className={styles.icon}>
            <Image src={Thumb} alt="icon" />
          </div>

          <h4>
            {t('Homepage.fourGrid.one.title.a')}
            <span>
              {t('Homepage.fourGrid.one.title.span')}
              <svg
                width="128"
                height="65"
                viewBox="0 0 128 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100.259 14.5783C81.7284 -0.105637 43.14 -2.37637 22.2189 6.24055C12.6908 10.165 -5.47177 22.6127 3.04731 37.2899C4.54984 39.8787 6.48576 42.0633 8.52608 43.9953C30.9808 65.257 65.4445 67.28 93.0566 59.2359C97.1747 58.0363 101.265 56.5211 105.126 54.2683C108.014 52.5833 110.867 50.4122 113.267 47.7725C120.292 40.0448 119.672 31.3915 113.957 23.51C107.331 14.3721 97.2738 10.6281 87.6688 8.11077C79.2697 5.90955 70.7682 4.70181 62.132 4.2253C45.9352 3.33152 27.2226 2.71387 12.4401 12.4901C5.9835 16.7602 -1.55096 26.5984 2.52843 35.7209C6.949 45.6061 19.5166 50.0761 27.9768 53.0199C50.7998 60.9616 88.1592 62.571 111.07 51.1672C113.54 49.9374 116.029 48.8126 118.311 47.0852C120.113 45.7203 121.872 44.13 123.44 42.371C134.556 29.9044 114.166 18.9458 106.799 16.6234C83.6251 9.31746 49.3064 -1.32559 26.0867 8.43776"
                  stroke="#36B887"
                  strokeWidth="1.49956"
                  strokeMiterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h4>
          <p>{t('Homepage.fourGrid.one.text')}</p>
        </div>
        <div className={styles.col}>
          <LocalizedImage
            srcus={MaleUS}
            srcinitial={Male}
            altinitial="Male user - Qilo"
          />
          <Image
            src={Vector}
            alt="Male user - Qilo"
            data-animation="scale-in"
          />
        </div>

        <div className={styles.col}>
          <LocalizedImage
            srcus={FemaleUS}
            srcinitial={Female}
            altinitial="Female user - Qilo"
          />
          <Image src={Sketch} alt="Female user - Qilo" />
        </div>
        <div className={styles.col}>
          <div className={styles.icon}>
            <Image src={Person} alt="icon" />
          </div>
          <h4>
            <span>
              {t('Homepage.fourGrid.two.title.span')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="394"
                height="9"
                viewBox="0 0 394 9"
                fill="none"
              >
                <path
                  d="M170.24 8C186.278 7.60947 202.319 7.30849 218.398 7.13736C227.42 7.04143 236.442 6.98652 245.469 6.93855C257.669 6.87371 270.523 6.90879 282.455 6.03223C283.085 5.98604 281.175 5.96961 280.532 5.94193C279.191 5.88404 277.833 5.85593 276.488 5.80737C273.141 5.68642 269.811 5.60158 266.452 5.51927C254.908 5.23622 243.328 5.04879 231.745 5.01904C197.934 4.93199 164.811 4.94695 131.095 5.87384C120.274 6.1714 109.489 6.52476 98.6837 6.87133C96.2001 6.95097 88.6944 6.89976 86.9662 7.59052C86.288 7.86158 89.2766 7.58815 90.4313 7.57823C92.4537 7.56091 94.4582 7.56877 96.4795 7.59008C102.918 7.65789 109.364 7.6222 115.799 7.51502C134.759 7.19924 153.795 7.04721 172.782 6.84306C209.664 6.44661 246.49 5.49558 283.33 4.89423C294.357 4.71436 305.348 4.36661 316.375 4.20643C322.562 4.11657 331.019 4.3228 336.669 3.43529C337.837 3.25186 334.034 3.33624 332.718 3.28517C330.38 3.19456 328.084 3.11212 325.731 3.05794C317.923 2.87836 310.015 2.93446 302.185 2.81455C279.535 2.46754 256.847 2.32201 234.155 2.31802C186.848 2.31002 138.772 2.39988 91.6253 3.59117C73.1118 4.05898 51.304 3.79858 33.5734 5.62497C32.2186 5.76458 36.4512 5.64007 37.8837 5.67516C40.6543 5.74311 43.4703 5.68523 46.2501 5.73823C54.9121 5.90359 63.5562 5.72283 72.2217 5.65665C98.076 5.45872 123.982 5.42971 149.872 5.26952C178.443 5.09261 206.887 4.23013 235.416 3.81679C267.938 3.34558 300.45 3.06829 332.958 2.53771C348.265 2.28782 363.572 2.2135 378.897 2.22372C381.077 2.2252 391.359 2.59189 392.842 2.09285C393.845 1.75531 389.811 1.94406 388.292 1.87566C384.859 1.72111 381.415 1.63822 377.961 1.53651C368.685 1.26382 359.336 1.0604 350.012 1.02368C321.618 0.912058 293.195 1.24012 264.806 1.08068C233.452 0.904658 201.818 1.42117 170.452 1.64205C142.229 1.84087 113.881 1.40222 85.6352 1.46085C57.5865 1.51918 29.0329 2.87189 1 2.26655"
                  stroke="#36B887"
                  stroke-width="1.5"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            {t('Homepage.fourGrid.two.title.a')}
          </h4>
          <p>{t('Homepage.fourGrid.two.text')}</p>
        </div>
      </div>
    </section>
  );
}
