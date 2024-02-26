import React from 'react';
import Image from 'next/image';
//
import Icon1 from '../../assets/pages/how-it-works/happens/icon1.svg';
import Decor1 from '../../assets/pages/how-it-works/happens/decor1.svg';
import Icon2 from '../../assets/pages/how-it-works/happens/icon2.svg';
import Decor2 from '../../assets/pages/how-it-works/happens/decor2.svg';
import Icon3 from '../../assets/pages/how-it-works/happens/icon3.svg';
import Decor3 from '../../assets/pages/how-it-works/happens/decor3.svg';
import Icon4 from '../../assets/pages/how-it-works/happens/icon4.svg';
import Decor4 from '../../assets/pages/how-it-works/happens/decor4.svg';
import PrimaryOutlineButton from '../common/PrimaryOutlineButton';
//
import styles from './styles/happenings.module.scss';

export default function Happenings() {
  return (
    <section className={styles.happenings}>
      <svg
        width="1440"
        height="3188"
        viewBox="0 0 1440 3188"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.bgSvg}
      >
        <rect
          width="1440"
          height="1101"
          transform="translate(0 1055)"
          fill="#043D3B"
        />
        <g opacity="0.05">
          <path
            d="M-1305.56 2217.73C-1211.5 2319.13 -1068.8 2485.59 -988.794 2585.74C-510.347 3181.47 -163.413 3281.88 714.611 3076.18C1065.51 2993.9 1109.22 2996.33 1667.11 3152.01C2382.83 3351.44 3200.7 2935.9 3014.32 2379.47C2897.42 2028.94 2895.88 2034.16 3010.06 1695.76C3168.97 1220.18 3157.25 1017.98 2951.5 697.8C2332.68 -264.025 867.085 -221.708 469.809 767.607C346.141 1074.73 299.62 1153.19 182.929 1250.21C-22.4498 1420.64 -95.7993 1424.85 -347.72 1271.87C-704.478 1055.37 -1024.7 1000.52 -1331.8 1103.51C-1804.16 1261.95 -1796.24 1687.29 -1305.56 2217.73ZM-542.568 1341.79C-2.76725 1661.96 449.166 1470.98 704.138 813.652C860.212 411.152 944.136 318.179 1272.95 178.573C1835.53 -59.8163 2547.15 288.375 2816.62 933.2C2915.91 1172.9 2896.42 1379.14 2731.1 1810.38C2650.75 2019.47 2647.83 2069.07 2703.13 2239.78C2786.89 2499.11 2791.69 2529.09 2767.11 2629.66C2659.56 3065.9 2219.78 3173.32 1643.17 3019.01C1132.19 2881.41 1007.31 2880.6 487.979 3002.69C-89.047 3139.36 -326.631 3059.39 -695.255 2604.16C-861.529 2398.65 -954.047 2292.02 -1113.93 2123.02C-1758.19 1440.53 -1338.97 868.67 -542.568 1341.79Z"
            fill="white"
          />
          <path
            d="M-264.294 2842.79C134.769 3099.57 54.1952 3251.25 728.376 3209.45C1046.74 3189.93 906.037 3135.68 1524 3088.88C1973.43 3054.49 2350.88 2977.32 2349.38 2596.32C2348.96 2488.02 2356.54 2431.88 2381.24 2362.63C2566.53 1846.49 2291.08 1268.24 1863.38 1271.23C1585.54 1273.63 1420.51 1385.19 1190.83 1727.96C1051.17 1935.97 856.675 2095.93 672.667 2143.63C644.595 2150.26 471.367 2161.39 287.195 2167.33C-245.031 2185.09 -407.093 2256.19 -484.159 2505.71C-525.781 2638.97 -486.515 2700.13 -264.294 2842.79ZM373.258 2220.49C903.984 2218.39 1078.44 2122.46 1349.91 1689.5C1830.8 924.282 2526 1464.34 2168.81 2328.23C2116.24 2455.01 2113.17 2468.08 2124.5 2571.11C2152.1 2841.1 1948.08 2958.03 1373.82 3005.96C1049.25 3033.34 971.289 3057.13 774.798 3106.18C671.878 3132.68 493.954 3139.91 400.235 3124.62C312.764 3110.61 134.046 2915.6 -117.911 2753.49C-548.269 2477.25 -315.12 2224.5 373.258 2220.49Z"
            fill="white"
          />
        </g>
      </svg>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <h2>What happens when you get in?</h2>
          </div>

          <div className={styles.cardsOverlay}>
            <div className={`${styles.card} ${styles.card1}`}>
              <Image src={Icon1} alt="icon" className={styles.icon} />
              <Image src={Decor1} alt="icon" className={styles.decor} />
              <h3>Nutrition plan</h3>
              <p>
                You'll complete a detailed nutrition form, allowing us to create
                a personalized nutrition plan that aligns with your goals and
                preferences.
              </p>
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <Image src={Icon2} alt="icon" className={styles.icon} />
              <Image src={Decor2} alt="icon" className={styles.decor} />
              <h3>Meet your care team</h3>
              <p>
                You'll have the opportunity to connect with your dedicated care
                team, consisting of a doctor, personal coach, and coordinator
                (for those in the medical pathway), ensuring you receive
                comprehensive support and guidance.
              </p>
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
              <Image src={Icon3} alt="icon" className={styles.icon} />
              <Image src={Decor3} alt="icon" className={styles.decor} />
              <h3>Join Your Circle</h3>
              <p>
                Embrace a sense of community and belonging as you join your peer
                circle. Share experiences, support one another, and foster
                meaningful connections on your health journey.
              </p>
            </div>
            <div className={`${styles.card} ${styles.card4}`}>
              <Image src={Icon4} alt="icon" className={styles.icon} />
              <Image src={Decor4} alt="icon" className={styles.decor} />
              <h3>Tools for Success</h3>
              <p>
                We provide you with a toolkit for success. You'll have access to
                tools like weekly habits, exercise plans, journaling resources,
                and a mindful eating timer to help you stay on track and achieve
                your health goals.
              </p>
            </div>
          </div>

          <PrimaryOutlineButton
            text="This is why it works"
            customStyles={{
              color: '#E6FE55',
            }}
          />
        </div>
      </div>
    </section>
  );
}
