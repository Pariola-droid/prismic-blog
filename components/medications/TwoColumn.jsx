import React, { useState, useEffect } from 'react';
import Image from 'next/image';
//
import Check from '../Icons/CheckIcon';
import Image1 from '../../assets/pages/medications/two-column/happy-woman.svg';
import Image2 from '../../assets/pages/medications/two-column/pills-bottle.svg';
import Decor1 from '../../assets/pages/medications/two-column/hearts.svg';
import Decor2 from '../../assets/pages/medications/two-column/whiskers.svg';
//
import styles from './styles/two-column.module.scss';

export default function TwoColumn() {
  return (
    <section className={styles.twoColumn}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.col}>
            <div className={styles.textWrap}>
              <h3>Why medication</h3>
              <p>
                Prescription medication targets biological factors beyond your
                control, like hormone imbalances and genetics, to support
                effective weight management.
                <br />
                <br />
                It's a science-backed solution addressing these complex aspects.
              </p>
            </div>

            <div className={styles.imgWrap}>
              <Image src={Decor1} className={styles.decor} alt="decor" />
              <Image src={Image1} className={styles.img} alt="human images" />
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.textWrap}>
              <h3>Who should consider using medication?</h3>
              <ul>
                <li>
                  <Check />
                  <span>High BMI individuals</span>
                </li>
                <li>
                  <Check />
                  <span>Obesity due to medical conditions.</span>
                </li>
                <li>
                  <Check />
                  <span>Bariatric surgery candidates</span>
                </li>
                <li>
                  <Check />
                  <span>Hormonal imbalances affecting weight</span>
                </li>
                <li>
                  <Check />
                  <span>Tried traditional methods without success</span>
                </li>
              </ul>
            </div>

            <div className={styles.imgWrap}>
              <Image src={Decor2} className={styles.decor} alt="decor" />
              <Image src={Image2} className={styles.img} alt="human images" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
