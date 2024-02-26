import React from 'react';
import Image from 'next/image';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import Check from '../Icons/CheckIcon';
import Human1 from '../../assets/pages/we-treat/human1.svg';
import Human1US from '../../assets/pages/we-treat/human1-us.svg';
import Human2 from '../../assets/pages/we-treat/human2.svg';
import Human2US from '../../assets/pages/we-treat/human2-us.svg';
import Decor1 from '../../assets/pages/we-treat/decor1.svg';
import Decor2 from '../../assets/pages/we-treat/decor2.svg';
import Decor3 from '../../assets/pages/we-treat/decor3.svg';
//
import styles from './styles/header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <h1>
              Your Journey to {''}
              <span>
                Better Health
                <svg
                  width="621"
                  height="10"
                  viewBox="0 0 621 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M268.511 8.75C293.825 8.33157 319.145 8.0091 344.525 7.82574C358.767 7.72296 373.007 7.66413 387.256 7.61274C406.513 7.54326 426.802 7.58084 445.636 6.64168C446.63 6.59219 443.615 6.57458 442.601 6.54492C440.485 6.4829 438.34 6.45278 436.218 6.40075C430.934 6.27116 425.679 6.18027 420.376 6.09208C402.154 5.7888 383.877 5.58799 365.593 5.55611C312.225 5.46284 259.941 5.47887 206.722 6.47197C189.642 6.79078 172.619 7.16939 155.563 7.54071C151.643 7.62604 139.796 7.57117 137.068 8.31127C135.997 8.6017 140.715 8.30873 142.537 8.2981C145.729 8.27955 148.893 8.28796 152.084 8.31081C162.247 8.38345 172.422 8.34521 182.579 8.23037C212.506 7.89205 242.554 7.72916 272.524 7.51043C330.74 7.08565 388.868 6.06669 447.017 5.42239C464.422 5.22967 481.772 4.85709 499.177 4.68546C508.943 4.58918 522.291 4.81014 531.21 3.85924C533.054 3.66271 527.051 3.75311 524.973 3.69839C521.284 3.60132 517.659 3.51298 513.944 3.45493C501.621 3.26253 489.137 3.32264 476.779 3.19416C441.027 2.82236 405.216 2.66644 369.398 2.66216C294.726 2.65359 218.84 2.74987 144.422 4.02625C115.2 4.52748 80.777 4.24848 52.7904 6.20533C50.6517 6.3549 57.3328 6.2215 59.5939 6.2591C63.9671 6.3319 68.412 6.26989 72.7997 6.32667C86.4722 6.50385 100.116 6.31017 113.795 6.23927C154.604 6.0272 195.496 5.99611 236.362 5.82449C281.46 5.63494 326.356 4.71085 371.388 4.26799C422.722 3.76312 474.04 3.46603 525.353 2.89755C549.513 2.6298 573.675 2.55018 597.864 2.56113C601.305 2.56271 617.534 2.9556 619.875 2.42091C621.459 2.05926 615.091 2.26149 612.693 2.18821C607.275 2.02261 601.839 1.93381 596.386 1.82484C581.745 1.53267 566.988 1.31471 552.27 1.27537C507.452 1.15578 462.588 1.50727 417.778 1.33644C368.288 1.14785 318.355 1.70126 268.845 1.93791C224.297 2.15093 179.551 1.68096 134.967 1.74377C90.6937 1.80626 45.6233 3.2556 1.375 2.60702"
                    stroke="#36B887"
                    strokeWidth="1.5"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>
            <p>
              Beyond weight loss, we address the root causes of weight-related
              conditions, providing you with evidence-based treatments and
              empowering you to make informed choices for your health.
            </p>
          </div>

          <div className={styles.twoCols}>
            <div className={styles.col}>
              <div className={`${styles.colWrap} ${styles.right}`}>
                <div className={styles.content}>
                  <h4>More than just weight loss</h4>
                  <p>
                    Did you know that up to 80% of chronic diseases are
                    preventable? More than we realise, much of our health lies
                    within our power.
                    <br />
                    <br />
                    Our approach is centered around your overall health and
                    happiness because we understand that true wellness
                    encompasses more than just losing weight. It's about
                    empowering you to make lasting, positive changes in your
                    life and fostering a sense of holistic well-being.
                  </p>
                </div>
                {/*  */}
                <div className={styles.imgWrap}>
                  <Image
                    src={Decor1}
                    className={styles.decor}
                    alt="decor - illustration"
                  />
                  <LocalizedImage
                    srcinitial={Human1}
                    srcus={Human1US}
                    classNameinitial={styles.img}
                    classNameus={styles.img_us}
                    altinitial="human illustration"
                  />
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <div className={`${styles.colWrap} ${styles.left}`}>
                <div className={styles.content}>
                  <h4>Manage metabolic conditions</h4>
                  <ul>
                    <li>
                      <Check />
                      <span>Non-alcoholic fatty liver disease (NAFLD)</span>
                    </li>
                    <li>
                      <Check />
                      <span>Polycystic Ovarian Syndrome (PCOS)</span>
                    </li>
                    <li>
                      <Check />
                      <span>Prediabetes</span>
                    </li>
                    <li>
                      <Check />
                      <span>Obesity</span>
                    </li>
                  </ul>
                </div>
                {/*  */}
                <div className={styles.imgWrap}>
                  <Image
                    src={Decor3}
                    className={styles.decor}
                    alt="decor - illustration"
                    data-animation="rotate-down"
                  />
                  <LocalizedImage
                    srcinitial={Human2}
                    srcus={Human2US}
                    classNameinitial={styles.img}
                    classNameus={styles.img}
                    altinitial="human illustration"
                  />
                  <Image
                    src={Decor2}
                    className={styles.decor}
                    alt="decor - illustration"
                    data-animation="rotate-up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
