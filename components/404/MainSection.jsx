import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
//
import PrimaryButton from '../common/PrimaryButton';
import Spiral from '../../assets/pages/404/spiral.svg';
import Annotation from '../../assets/pages/404/annotation.svg';
//
import styles from './styles/custom-404.module.scss';

export default function MainSection() {
  const router = useRouter();

  const handleBackHome = () => {
    router.push('/');
  };

  return (
    <section className={styles.fallbackSection}>
      <Image src={Spiral} alt="Spiral" className={styles.spiralIlly} />
      <div className={styles.texts}>
        <h1 className={styles.h1a}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="312"
            height="118"
            viewBox="0 0 312 118"
            fill="none"
          >
            <path
              d="M304.66 102.453C307.052 75.4468 310.685 38.2061 306.54 11.8929C235.729 10.0193 165.122 8.74755 94.2569 10.5093C67.3661 11.1779 38.3846 16.857 11.6405 13.3749C12.6397 37.5126 12.6703 61.6184 13.5004 85.7192C13.8404 95.5893 16.9365 106.135 16.0086 116C95.3006 115.32 174.656 107.082 254.003 110.017C269.211 110.58 284.582 107.961 299.786 110.03C259.69 106.169 218.694 109.526 178.51 110.103C151.644 110.489 124.772 105.874 97.8112 106.099C72.3183 106.313 46.8522 112.088 21.4326 111.708C15.2966 76.9894 7.29958 41.6529 3.36329 6.48731C19.565 6.10109 35.7463 3.54123 51.9206 3.39027C138.019 2.58641 224.007 3.94509 310 7.90577C309.853 39.031 303.446 69.0731 301.784 99.881C299.488 67.8577 305.236 35.7884 303.622 3.86463C293.032 1.07832 280.677 2.93316 269.893 2.72473C241.476 2.1749 213.354 1.52469 184.937 2.51016C149.198 3.74928 113.631 5.6122 77.8971 7.43678C53.4044 8.68702 26.0934 6.38348 2 12.9841C4.49824 46.893 7.46376 80.8132 10.3124 114.661"
              stroke="#36B887"
              stroke-width="3.07478"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
          404
        </h1>
        <h1 className={styles.h1b}>Oops! Page not found.</h1>
        <p>
          While this page may have gone missing, your goals are still within
          reach. Let's get you back on track.
        </p>

        <PrimaryButton text="Back home" onClick={handleBackHome} />
      </div>
      <Image src={Annotation} alt="Annotation" className={styles.annoteIlly} />
    </section>
  );
}
