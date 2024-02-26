import React, { useState, useEffect } from 'react';
import Image from 'next/image';
//
import Whiskers from '../../assets/pages/about/founder/whiskers.svg';
import Jossy from '../../assets/pages/about/founder/founder-image.svg';
import AuthorIcon from '../../assets/pages/about/founder/author-icon.svg';
//
import styles from './styles/founder.module.scss';

export default function Founder() {
  return (
    <section className={styles.founder}>
      <Image
        src={Whiskers}
        alt="decorative whiskers"
        className={styles.whiskers}
      />
      <div className="container">
        <div className={styles.wrap}>
          <h2>
            Founder&apos;s Story
            <svg
              width="456"
              height="32"
              viewBox="0 0 456 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.4572 28.2961C8.7329 27.7721 13.7325 26.3856 18.519 24.8937C32.0597 20.6731 42.4536 14.169 51.8719 6.82495C51.8799 6.8196 55.514 10.4628 55.8722 10.7665C59.3391 13.6979 63.8933 16.1272 68.983 17.8538C88.2744 24.3969 112.741 19.0124 121.812 6.30938C121.839 7.49621 125.336 10.476 126.078 10.9906C131.869 15.0099 138.877 18.772 147.139 20.5248C167.094 24.7601 193.187 17.8478 202.805 5.61122C202.993 7.60771 206.427 10.7839 206.772 11.0448C212.21 15.1685 219.938 18.3392 228.332 19.3468C248.305 21.7461 269.688 14.9704 278.822 3.20281C280.329 6.05172 283.321 8.92751 284.153 9.4909C290.355 13.6956 298.02 17.0348 306.82 18.6257C328.475 22.5404 357.84 13.833 366.205 3.95672C365.882 4.77159 366.582 6.45988 366.698 6.59761C368.047 8.16368 369.872 9.53308 371.857 10.7827C377.171 14.1282 383.634 16.747 390.348 18.8178C410.175 24.933 440.205 24.7395 452.395 10.353"
                stroke="#E6FE55"
                strokeWidth="6"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>

          <div className={styles.fromFounder}>
            <div className={styles.image}>
              <Image src={Jossy} alt="founder's image" />
            </div>

            <div className={styles.writeup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="48"
                viewBox="0 0 43 48"
                fill="none"
                className={styles.arrow}
              >
                <path
                  d="M2 26.5981C-1.66893e-06 25.4434 0 22.5566 2 21.4019L38 0.617313C40 -0.537388 42.5 0.905987 42.5 3.21539L42.5 44.7846C42.5 47.094 40 48.5374 38 47.3827L2 26.5981Z"
                  fill="white"
                />
              </svg>

              <h3>
                "We wanted to create a co-pilot for the average African's{' '}
                <span>weight care journey.</span>"
              </h3>

              <p>
                Born and raised in Nigeria, I saw the urgent need for a solution
                to the escalating weight-related health issues in our
                communities. Obesity, diabetes, and heart disease were on the
                rise, and people were struggling to find personalized support. I
                knew we had to step in and make a change.
                <br />
                <br />
                Today, Qilo stands as a beacon of hope and health in Africa's
                weight care landscape. With countless success stories, we've
                turned our vision into a reality. Through Qilo, individuals
                across Africa embark on transformative journeys towards
                healthier, happier lives. And our commitment remains unwavering
                – to be your trusted co-pilot on your unique weight care
                journey.
              </p>

              <div className={styles.author}>
                <Image src={AuthorIcon} alt="Author icon" />
                <small>DR JOSSY ONWUDE, CO-FOUNDER OF QILO</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
