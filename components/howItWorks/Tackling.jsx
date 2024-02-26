import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
//
import Happy from '../../assets/pages/how-it-works/tackling/happy.svg';
import Nutrition from '../../assets/pages/how-it-works/tackling/nutrition.svg';
import Heart from '../../assets/pages/how-it-works/tackling/heart.svg';
import ColImage from '../../assets/pages/how-it-works/tackling/col-image.jpg';
import ColImageUS from '../../assets/pages/how-it-works/tackling/col-image-us.webp';
import DecorStar from '../../assets/pages/how-it-works/tackling/star.svg';
import PrimaryOutlineButton from '../common/PrimaryOutlineButton';
import ImgHappyFace from '@/assets/pages/how-it-works/tackling/ImgHappyFace';
//
import styles from './styles/tackling.module.scss';
import LocalizedImage from '@/design-system/LocalizedImage';
import PrimaryButton from '../common/PrimaryButton';

const Diagnosis = [
  {
    icon: Happy,
    title: 'Emotional Health',
    para: 'Explore and address the underlying emotions affecting your motivation and why you eat the way you do.',
  },
  {
    icon: Nutrition,
    title: 'Nutrition',
    para: 'Understand how your food choices impact your body at a fundamental level, going beyond temporary fixes to achieve sustainable health.',
  },
  {
    icon: Heart,
    title: 'Develop Healthy Habits',
    para: 'Uncover and transform your daily routines by identifying and altering the deep-seated habits that impact your metabolic health.',
  },
];

export default function Tackling() {
  const { t } = useTranslation('common');
  return (
    <section className={styles.tackling}>
      <section className={styles.firstSection}>
        <svg
          width="207"
          height="327"
          viewBox="0 0 207 327"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.waves}
        >
          <path
            d="M118.148 204.475C103.329 210.636 91.4245 212.884 73.276 212.884C38.311 212.884 9.09023 195.9 -28.5388 198.398C-73.0775 201.395 -63.254 219.627 -54.7625 217.296C-37.4465 212.384 -32.7845 211.135 -21.8788 210.636C22.993 208.638 42.7232 226.536 83.4325 224.455C97.1687 223.789 113.735 219.544 123.809 215.132C140.209 207.889 132.383 198.481 118.148 204.475Z"
            fill="white"
          />
          <path
            d="M-49.6844 128.468C-25.2922 116.48 -14.6361 115.564 13.5024 123.057C68.6972 137.625 77.6881 138.625 100.998 132.548C112.154 129.634 130.885 119.977 130.885 117.146C130.885 110.903 122.726 110.07 113.402 115.398C78.7704 135.211 47.4684 123.973 26.8224 118.395C7.92469 113.317 -15.4686 105.408 -33.1176 109.238C-52.9311 113.483 -70.6634 124.389 -66.9171 130.05C-63.9201 134.629 -61.7557 134.462 -49.6844 128.468Z"
            fill="white"
          />
          <path
            d="M156.609 136.377C141.374 147.033 132.133 151.861 120.312 155.358C87.7609 165.015 56.3756 165.764 20.9943 157.523C-13.3879 149.614 -37.031 150.446 -63.1715 160.436C-83.984 168.428 -92.3922 174.755 -86.8977 178.335C-84.4002 179.917 -84.6499 180 -59.0921 171.591C-26.9576 161.019 -9.14215 159.936 23.0756 166.763C63.7016 175.338 96.4187 174.755 127.637 164.931C145.536 159.27 169.346 145.201 169.845 139.873C170.428 134.046 162.852 131.964 156.609 136.377Z"
            fill="white"
          />
        </svg>
        <div className="container">
          <div className={styles.firstSectionWrap}>
            <div className={styles.heading}>
              <h2>{t('HowItWorks.tackling.title')}</h2>
            </div>

            <div className={styles.innerWrap}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="572"
                height="474"
                viewBox="0 0 572 474"
                fill="none"
                className={styles.line}
              >
                <path
                  d="M2.68376 1.36582C2.68376 1.36582 42.7034 119.349 95.8925 168.21C162.349 229.259 431.032 311.117 497.635 372.003C532.784 404.135 569.515 472.745 569.515 472.745"
                  stroke="#043D3B"
                  strokeWidth="4.5"
                  strokeLinejoin="round"
                  strokeDasharray="18 18"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="158"
                height="722"
                viewBox="0 0 158 722"
                fill="none"
                className={styles.lineMd}
              >
                <path
                  d="M72.0205 720.666C72.0205 720.666 153.983 614.92 155.45 544.45C157.283 456.402 0.469657 207.513 2.01129 119.464C2.82488 72.9973 38.5506 1.69802 38.5506 1.69802"
                  stroke="#043D3B"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  strokeDasharray="16 16"
                />
              </svg>

              {Diagnosis.map((diagnose, index) => (
                <div className={styles.rows} key={index}>
                  <div className={styles.col}>
                    <div className={styles.icon}>
                      <Image src={diagnose.icon} alt="icon" />
                    </div>

                    <div className={styles.texts}>
                      <h5>{diagnose.title}</h5>
                      <p>{diagnose.para}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <PrimaryOutlineButton
              text="I’m ready to get started"
              link={'https://app.qilo.co/'}
              customStyles={{
                color: '#043D3B',
              }}
            />
          </div>
        </div>
      </section>
      {/*  */}
      <section className={styles.secondSection}>
        <div className="container">
          <div className={styles.secondSectionWrap}>
            <div className={styles.col}>
              <ImgHappyFace className={styles.icon} />
              <h4>How can you get in?</h4>
              <p>
                Begin your journey with Qilo by taking a quick and insightful
                assessment to understand your unique metabolic health needs
              </p>

              <PrimaryButton
                text="Start your journey"
                link={'https://app.qilo.co/'}
                customStyles={{
                  color: '#043D3B',
                }}
              />
            </div>

            <div className={styles.col}>
              <LocalizedImage
                srcus={ColImageUS}
                srcinitial={ColImage}
                className={styles.bigImage}
                alt="qilo illustration"
              />

              <Image
                src={DecorStar}
                className={styles.decor}
                alt="qilo illustration"
                data-animation="scale-out"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
