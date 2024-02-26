import React from 'react';
import Image from 'next/image';
//
import Icon1 from '../../assets/pages/program/whyQilo/icon1.svg';
import Icon2 from '../../assets/pages/program/whyQilo/icon2.svg';
import Icon3 from '../../assets/pages/program/whyQilo/icon3.svg';
import Icon4 from '../../assets/pages/program/whyQilo/icon4.svg';
import Icon5 from '../../assets/pages/program/whyQilo/icon5.svg';
import Icon6 from '../../assets/pages/program/whyQilo/icon6.svg';
import Icon7 from '../../assets/pages/program/whyQilo/icon7.svg';
import spiral from '../../assets/pages/program/whyQilo/spiral.svg';
//
import styles from './styles/why-qilo.module.scss';
import PrimaryOutlineButton from '../common/PrimaryOutlineButton';

const Whys = [
  {
    icon: Icon1,
    title: 'Professional care team',
    para: `Designed and supervised by experts, Qilo's program ensures you receive top-notch guidance and support from a team of healthcare professionals`,
  },
  {
    icon: Icon2,
    title: 'Personalized approach',
    para: `Qilo tailors your health plan to your unique needs and goals, ensuring a customized approach to your wellness`,
  },
  {
    icon: Icon3,
    title: 'Easy to use plan',
    para: `Qilo's user-friendly interface makes navigating your health journey straightforward and stress-free, ensuring a smooth, enjoyable experience`,
  },
  {
    icon: Icon4,
    title: 'Medication',
    para: 'Build healthy habits while losing excess weight. Your weight care should not just be a quick fix to achieve an ideal weight, but an avenue to build and maintain healthy habits.',
  },
  {
    icon: Icon5,
    title: 'Science-backed',
    para: `Get a science-based, weight care regimen that works. It's not just hype or random fad diets, it's a weight care solution built on proven scientific and clinically proven methods.`,
  },
  {
    icon: Icon6,
    title: 'Behavioral intervention',
    para: `When necessary, Qilo incorporates safe, clinically approved medications as part of your comprehensive treatment plan, enhancing your path to wellness`,
  },
  {
    icon: Icon7,
    title: 'Community',
    para: `Join a supportive community guided by coaches and connect with peers who share similar health goals, fostering motivation and accountability`,
  },
];

export default function WhyQilo() {
  return (
    <section className={styles.whyQilo}>
      <div className="container">
        <div className={styles.wrap}>
          <Image src={spiral} className={styles.decor} alt="decor" />

          <div className={styles.heading}>
            <h2>
              Why Qilo?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="61"
                viewBox="0 0 47 61"
                fill="none"
              >
                <path
                  d="M17.4432 50.7645C17.1846 51.9929 20.021 52.5079 29.5235 52.9974C39.5826 53.509 41.8202 53.2558 41.6093 51.7644C41.294 49.717 17.9126 48.7885 17.4432 50.7645Z"
                  fill="#8F4949"
                />
                <path
                  d="M16.1133 6.30961C12.3915 5.79965 11.8255 6.37209 8.27799 14.2097C4.60546 22.301 4.22262 23.9098 5.68194 24.7236C8.33404 26.1884 9.99331 24.3574 15.0349 14.5758C18.7504 7.35707 18.8604 6.686 16.1133 6.30961Z"
                  fill="#8F4949"
                />
                <path
                  d="M34.9363 21.925C32.265 21.5229 31.2174 21.9211 27.628 24.6613C17.0114 32.8303 8.77992 37.8233 13.9953 38.5018C16.1221 38.7932 18.2524 37.4781 30.9884 28.3356C38.005 23.2483 38.5066 22.4864 34.9363 21.925Z"
                  fill="#8F4949"
                />
              </svg>
            </h2>
          </div>

          <div className={styles.grid}>
            {Whys.map((why, i) => (
              <div className={styles.col} key={i}>
                <div className={styles.icon}>
                  <Image src={why.icon} alt="icon" />
                </div>

                <div className={styles.texts}>
                  <h5>{why.title}</h5>
                  <p>{why.para}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.mdBtn}>
            <PrimaryOutlineButton
              text=" Get started with QILO today"
              link="/program"
              customStyles={{
                color: '#043D3B',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
