import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import Check from '../Icons/CheckIcon';
import Meds from '../../assets/pages/program/sixGrid/medication.svg';
import Col2 from '../../assets/pages/program/sixGrid/col2.jpg';
import Col3 from '../../assets/pages/program/sixGrid/col3.jpg';
import Col3US from '../../assets/pages/program/sixGrid/col3-us.webp';
import Col6 from '../../assets/pages/program/sixGrid/col6.jpg';
import Col6US from '../../assets/pages/program/sixGrid/col6-us.webp';
import Thumbs from '../../assets/pages/program/sixGrid/thumbs.svg';
import Flower from '../../assets/pages/program/sixGrid/flower.svg';
import Hands from '../../assets/pages/program/sixGrid/hands.svg';
//
import styles from './styles/six-grid.module.scss';
import { newLine } from '@/utils/formatLineBreaks';

export default function SixGrid() {
  const { t } = useTranslation('common');
  return (
    <section className={styles.sixGrid}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.col}>
            <Image src={Meds} className={styles.icon} alt="medication image" />
            <h4>Medication</h4>
            <p>
              For some, losing weight can be a real challenge, even with diet
              and exercise. Factors like genetics, hormones, or other health
              conditions might make it harder. That's where medication can help.
              Medication, when prescribed by a healthcare professional, can
              provide the extra support needed for your weight loss journey.
            </p>
          </div>

          <div className={styles.col}>
            <Image
              src={Col2}
              className={styles.bigImage}
              alt="qilo illustration"
            />

            <Image
              src={Thumbs}
              className={styles.decor}
              alt="qilo decor"
              data-animation="rotate-up"
            />
          </div>
          <div className={styles.col}>
            <LocalizedImage
              srcus={Col3US}
              srcinitial={Col3}
              className={styles.bigImage}
              altinitial="qilo illustration"
            />
            <Image src={Flower} className={styles.decor} alt="qilo decor" />
          </div>

          <div className={styles.col}>
            <h4>How medication might help</h4>
            <ul>
              <li>
                <Check />
                <span>Reduces appetite and cravings</span>
              </li>
              <li>
                <Check />
                <span>Regulates blood sugar levels</span>
              </li>
              <li>
                <Check />
                <span>Slows digestion and absorption</span>
              </li>
              <li>
                <Check />
                <span>Increases feelings of fullness</span>
              </li>
              <li>
                <Check />
                <span>Supports weight loss efforts</span>
              </li>
            </ul>
            <button>
              <a href="#0">Read more</a>
            </button>
          </div>

          <div className={styles.col}>
            <h4>
              How to get the best results from {''}
              <span>
                medication
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="216"
                  height="10"
                  viewBox="0 0 216 10"
                  fill="none"
                >
                  <path
                    d="M93.7833 9C102.528 8.58157 111.275 8.2591 120.043 8.07574C124.963 7.97296 129.882 7.91413 134.804 7.86274C141.457 7.79326 148.466 7.83084 154.972 6.89168C155.315 6.84219 154.274 6.82458 153.924 6.79492C153.192 6.7329 152.452 6.70278 151.718 6.65075C149.893 6.52116 148.078 6.43027 146.246 6.34208C139.951 6.0388 133.637 5.83799 127.321 5.80611C108.884 5.71284 90.8228 5.72887 72.4382 6.72197C66.5376 7.04078 60.657 7.41939 54.765 7.79071C53.4108 7.87604 49.3181 7.82117 48.3757 8.56127C48.0059 8.8517 49.6355 8.55873 50.2651 8.5481C51.3679 8.52955 52.4609 8.53796 53.5631 8.56081C57.0739 8.63345 60.5888 8.59521 64.0976 8.48037C74.4363 8.14205 84.8164 7.97916 95.1695 7.76043C115.28 7.33565 135.361 6.31669 155.449 5.67239C161.462 5.47967 167.455 5.10709 173.468 4.93546C176.842 4.83918 181.453 5.06014 184.534 4.10924C185.171 3.91271 183.097 4.00311 182.379 3.94839C181.105 3.85132 179.853 3.76298 178.569 3.70493C174.312 3.51253 170 3.57264 165.73 3.44416C153.38 3.07236 141.009 2.91644 128.635 2.91216C102.839 2.90359 76.6242 2.99987 50.9162 4.27625C40.8212 4.77748 28.9298 4.49848 19.2617 6.45533C18.5229 6.6049 20.8309 6.4715 21.612 6.5091C23.1227 6.5819 24.6582 6.51989 26.174 6.57667C30.8972 6.75385 35.6107 6.56017 40.3358 6.48927C54.4336 6.2772 68.5599 6.24611 82.6772 6.07449C98.2565 5.88494 113.766 4.96085 129.323 4.51799C147.056 4.01312 164.784 3.71603 182.511 3.14755C190.857 2.8798 199.204 2.80018 207.56 2.81113C208.749 2.81271 214.355 3.2056 215.164 2.67091C215.711 2.30926 213.511 2.51149 212.683 2.43821C210.811 2.27261 208.933 2.18381 207.049 2.07484C201.991 1.78267 196.894 1.56471 191.809 1.52537C176.327 1.40578 160.828 1.75727 145.348 1.58644C128.252 1.39785 111.002 1.95126 93.8989 2.18791C78.5095 2.40093 63.0516 1.93096 47.65 1.99377C32.3555 2.05626 16.7858 3.5056 1.5 2.85702"
                    stroke="#36B887"
                    strokeWidth="1.5"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h4>
            <p>{newLine(t('Program.sixGrid.three.text'))}</p>
          </div>

          <div className={styles.col}>
            <LocalizedImage
              srcus={Col6US}
              srcinitial={Col6}
              className={styles.bigImage}
              altinitial="qilo illustration"
            />
            <Image
              src={Hands}
              className={styles.decor}
              alt="qilo decor"
              data-animation="up-down"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
