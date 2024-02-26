import React, { useState } from 'react';
import Image from 'next/image';
//
import Crosses from '../../assets/pages/pricing/qilo-help/crosses.svg';
import Icon1 from '../../assets/pages/pricing/qilo-help/icon1.svg';
import Icon2 from '../../assets/pages/pricing/qilo-help/icon2.svg';
import Icon3 from '../../assets/pages/pricing/qilo-help/icon3.svg';
import Icon4 from '../../assets/pages/pricing/qilo-help/icon4.svg';
//
import styles from './styles/qilo-help.module.scss';

const Help = [
  {
    icon: Icon1,
    title: '95%',
    para: 'Non-scale victories, such as lower blood sugar, increased energy, and improved self-confidence, were experienced by 95% of our members.',
  },
  {
    icon: Icon2,
    title: '10-15%',
    para: 'For members using GLP-1 medication in the Medical pathway, the average weight loss reported was 10-15% of body weight.',
  },
  {
    icon: Icon3,
    title: '1-2 lbs',
    para: 'On average, members on the program lost 1-2 pounds (0.5-1kg) per week.',
  },
  {
    icon: Icon4,
    title: '90% ',
    para: 'Our program was found to be easy to follow by 90% of members, with practical meal guides and habit tools contributing to its effectiveness.',
  },
];

export default function QiloHelp() {
  return (
    <section className={styles.qiloHelp}>
      <Image src={Crosses} className={styles.decor} alt="decor" />

      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <h2>
              Small Choices, <span>Big impact</span>
            </h2>
          </div>

          <div className={styles.grided}>
            {Help.map((help, index) => (
              <div className={styles.col} key={index}>
                <div className={styles.icon}>
                  <Image src={help.icon} alt="icon" />
                </div>

                <div className={styles.texts}>
                  <h5>{help.title}</h5>
                  <p>{help.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
