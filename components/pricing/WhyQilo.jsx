import React from 'react';
import Image from 'next/image';
//
import Icon1 from '../../assets/pages/pricing/why-qilo/icon1.svg';
import ClinicIcon from '../../assets/pages/pricing/why-qilo/icon2.svg';
import Icon3 from '../../assets/pages/pricing/why-qilo/icon3.svg';
import Icon4 from '../../assets/pages/pricing/why-qilo/icon4.svg';
import Icon5 from '../../assets/pages/pricing/why-qilo/icon5.svg';
import Icon6 from '../../assets/pages/pricing/why-qilo/icon6.svg';
import Icon7 from '../../assets/pages/pricing/why-qilo/icon7.svg';
import Twisted from '../../assets/pages/pricing/why-qilo/twisted.svg';
//
import styles from './styles/why-qilo.module.scss';

const Whys = [
  {
    icon: Icon1,
    para: 'Comprehensive Approach',
  },
  {
    icon: Icon6,
    para: 'Supervised by Professionals',
  },
  {
    icon: Icon3,
    para: 'Tailored to Each Individual',
  },
  {
    icon: Icon4,
    para: 'Realistic Nutrition Plans',
  },
  {
    icon: ClinicIcon,
    para: `Clinical Care and Medication Options`,
  },
  {
    icon: Icon7,
    para: 'Behavioral Change Techniques',
  },
];

export default function WhyQilo() {
  return (
    <section className={styles.whyQilo}>
      <div className="container">
        <div className={styles.wrap}>
          <Image
            src={Twisted}
            className={styles.decor}
            alt="decor"
            data-animation="twisted-down"
          />

          <div className={styles.heading}>
            <h2>
              The Qilo
              <span>
                {' '}
                Difference
                <svg
                  width="317"
                  height="26"
                  viewBox="0 0 317 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.39814 22.7926C7.04146 22.3919 10.4922 21.3123 13.7955 20.1493C23.1404 16.8592 30.3065 11.7667 36.7969 6.01151C36.8024 6.00732 39.3206 8.88017 39.5687 9.11973C41.9699 11.4325 45.1212 13.3526 48.6409 14.7214C61.9814 19.9083 78.8712 15.7264 85.1102 5.75619C85.1312 6.68957 87.5538 9.0404 88.067 9.44669C92.0761 12.6199 96.9254 15.5935 102.636 16.9896C116.431 20.3631 134.441 14.9832 141.059 5.381C141.193 6.95146 143.571 9.45661 143.81 9.66252C147.576 12.9171 152.922 15.4272 158.722 16.2376C172.524 18.1672 187.281 12.8847 193.565 3.65019C194.613 5.89382 196.686 8.16178 197.262 8.60662C201.555 11.9265 206.857 14.569 212.94 15.8389C227.907 18.964 248.174 12.1795 253.932 4.43064C253.71 5.07076 254.197 6.39994 254.278 6.5085C255.213 7.74296 256.477 8.82379 257.85 9.81072C261.528 12.453 265.999 14.5264 270.641 16.1693C284.351 21.0208 305.095 20.9332 313.485 9.64571"
                    stroke="#36B887"
                    strokeWidth="6"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className={styles.grid}>
            {Whys.map((why, i) => (
              <div className={styles.col} key={i}>
                <div className={styles.icon}>
                  <Image src={why.icon} alt="icon" />
                </div>

                <div className={styles.texts}>
                  <p>{why.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
