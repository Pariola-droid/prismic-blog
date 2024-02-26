import React from 'react';
import Image from 'next/image';
//
import Hearts from '../../assets/pages/science/approach/hearts.svg';
import Icon1 from '../../assets/pages/science/approach/icon1.svg';
import Icon2 from '../../assets/pages/science/approach/icon2.svg';
import Icon3 from '../../assets/pages/science/approach/icon3.svg';
import Icon4 from '../../assets/pages/science/approach/icon4.svg';
import Icon5 from '../../assets/pages/science/approach/icon5.svg';
import Icon6 from '../../assets/pages/science/approach/icon6.svg';
import PrimaryOutlineButton from '../common/PrimaryOutlineButton';
//
import styles from './styles/approach.module.scss';

const cards = [
  {
    icon: Icon1,
    title: 'Nutrition',
    text: `Proper nutrition isn't just about counting calories; it's the fuel that powers your journey. We'll teach you to make smart food choices that nourish your body and keep those cravings at bay.`,
  },
  {
    icon: Icon2,
    title: 'Movement',
    text: `Exercise isn't just about sweat and strenuous routines; it's about finding joy in motion. We'll help you discover the activities you love, making fitness a fun part of your life.`,
  },
  {
    icon: Icon3,
    title: 'Medication',
    text: `Sometimes, your body needs a little extra support, and that's perfectly okay. Our experts can guide you on medication options, that complement your journey safely and effectively.`,
  },
  {
    icon: Icon5,
    title: 'Sleep',
    text: `Your body needs rest to reset! We'll show you how quality sleep supports weight loss, leaving you refreshed, focused, and ready to conquer your goals.`,
  },
  {
    icon: Icon4,
    title: 'Social Support',
    text: 'Lean on your personal coach and connect with peers who understand your journey. Our support provides motivation, accountability, and friendship to keep you on track.',
  },
  {
    icon: Icon6,
    title: 'Emotional Health',
    text: `It's not just about the body, it's about the mind too! Managing stress, anxiety, and emotional well-being empowers you to conquer your weight loss goals with confidence and resilience`,
  },
];

export default function Approach() {
  return (
    <section className={styles.approach}>
      <div className="container">
        <div className={styles.wrap}>
          <Image src={Hearts} className={styles.decor} alt="Hearts" />
          <div className={styles.heading}>
            <h2>
              A{' '}
              <span>
                well-rounded
                <svg
                  width="383"
                  height="12"
                  viewBox="0 0 383 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M382.351 3.81656C380.793 2.40189 367.408 1.80624 327.182 1.30986C289.648 0.838306 245.953 -0.526738 169.61 0.217828C111.254 0.788662 38.5938 3.072 38.5938 4.33776C38.5938 5.25606 41.4266 5.28088 68.4795 4.46186C93.4788 3.71729 106.297 3.54356 121.948 3.34501C59.2022 5.28088 45.8174 6.54665 12.3907 7.76277C-8.57185 8.53216 3.67989 10.741 11.3284 10.5177C11.3992 10.5177 108.917 7.73795 118.124 7.88686C118.974 7.91168 109.696 8.35842 97.4446 8.87962C63.2389 10.3688 69.8251 12.8504 95.4617 11.7087C181.72 7.86179 262.879 6.67049 325.412 8.33335C345.171 8.85455 347.366 8.85455 347.366 8.20926C347.366 7.06759 341.984 6.19918 333.556 6.02545C320.384 5.72762 269.677 4.88353 246.732 4.63534C244.961 4.61052 245.811 4.13921 247.369 4.08957C256.717 3.76693 330.936 4.01487 360.113 4.36233C381.572 4.61052 383.13 4.58595 382.351 3.81656Z"
                    fill="#36B887"
                  />
                </svg>
              </span>{' '}
              approach
            </h2>
            <p>
              We focus on 6 pillars of sustainable weight loss, to make sure you
              get the best results.
            </p>
          </div>

          <div className={styles.middle}>
            {cards.map((card, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.digit}>
                  <h3>0{index + 1}</h3>
                </div>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <Image src={card.icon} alt="Icon" />
                  </div>
                  <div className={styles.texts}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.bottom}>
            <PrimaryOutlineButton
              text="Learn more about Qilo"
              link="/"
              customStyles={{
                color: '#fff',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
