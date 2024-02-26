import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import Hearts from '../../assets/pages/home/wholesome/hearts.svg';
import Woman from '../../assets/pages/home/wholesome/woman.svg';
import ManUS from '../../assets/pages/home/wholesome/man-us.svg';
//
import styles from './styles/wholesome.module.scss';

export default function Wholesome() {
  const { t } = useTranslation('common');

  return (
    <section className={styles.wholesome}>
      <Image src={Hearts} className={styles.hearts} alt="Hearts illustration" />

      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.textContent}>
            <h2>
              {t('Homepage.wholesome.title')}
              <span>
                {t('Homepage.wholesome.titleSpan')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="392"
                  height="16"
                  viewBox="0 0 392 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M391.386 5.47961C389.791 3.71075 376.086 2.96598 334.901 2.34533C296.47 1.75571 251.732 0.0489058 173.566 0.979884C113.817 1.69363 39.4221 4.54864 39.4221 6.1313C39.4221 7.2795 42.3225 7.31054 70.0213 6.28646C95.6174 5.35548 108.742 5.13825 124.766 4.88999C60.5225 7.31054 46.8181 8.8932 12.5934 10.4138C-8.8696 11.3758 3.67464 14.1377 11.5057 13.8584C11.5782 13.8584 111.425 10.3828 120.851 10.569C121.721 10.6 112.222 11.1586 99.6779 11.8103C64.6556 13.6722 71.399 16.7752 97.6477 15.3477C185.965 10.5376 269.061 9.04805 333.088 11.1272C353.318 11.7789 355.566 11.7789 355.566 10.9721C355.566 9.54457 350.055 8.45875 341.426 8.24152C327.94 7.86913 276.022 6.81371 252.529 6.50338C250.716 6.47235 251.586 5.88304 253.182 5.82097C262.753 5.41755 338.744 5.72756 368.618 6.16202C390.588 6.47235 392.183 6.44162 391.386 5.47961Z"
                    fill="#36B887"
                  />
                </svg>
              </span>
            </h2>

            <div className={styles.twoCopies}>
              <p>{t('Homepage.wholesome.paragraph')}</p>
            </div>
          </div>

          <LocalizedImage
            srcus={ManUS}
            srcinitial={Woman}
            classNameinitial={styles.woman}
            classNameus={styles.woman_us}
            alt="Woman illustration"
          />
        </div>
      </div>
    </section>
  );
}
