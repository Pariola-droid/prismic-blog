import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
//
import Check from '../Icons/CheckIcon';
import Human1 from '../../assets/pages/program/benefit/human1.jpg';
import Human1US from '../../assets/pages/program/benefit/human1-us.webp';
import Human2 from '../../assets/pages/program/benefit/human2.jpg';
import Human2US from '../../assets/pages/program/benefit/human2-us.webp';
import Human3 from '../../assets/pages/program/benefit/human3.jpg';
import Human3US from '../../assets/pages/program/benefit/human3-us.webp';
//
import Star from '../../assets/pages/home/wholesome/star.svg';
import Circle from '../../assets/pages/home/wholesome/circle.svg';
import Spin from '../../assets/pages/home/wholesome/spin.svg';
//
import useWindowSize from '@/utils/useWindowSize';
import styles from './styles/benefit.module.scss';
import LocalizedImage from '@/design-system/LocalizedImage';

gsap.registerPlugin(ScrollTrigger);

export default function Benefit() {
  const windowSize = useWindowSize();
  const screenSizeThreshold = 990;
  const benefitContainer = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hangers = [
    {
      ref: useRef(null),
      start: 'top 50%',
      end: '=+1000',
    },
    {
      ref: useRef(null),
      start: 'top 50%',
      end: '=+1000',
    },
    {
      ref: useRef(null),
      start: 'top 30%',
      end: '=+1000',
    },
  ];

  useEffect(() => {
    if (windowSize.width > screenSizeThreshold) {
      const tl = hangers.map((hanger, index) =>
        gsap
          .timeline({
            scrollTrigger: {
              trigger: benefitContainer.current,
              start: hanger.start,
              end: `=+1000`,
              scrub: 1,
            },
          })
          .to(hanger.ref.current, {
            duration: 0.5,
            rotate: index === 0 ? 9.25 : index === 1 ? 7.51 : -12.77,
            top: index === 2 ? undefined : index === 1 ? '13.1rem' : '2rem',
            bottom: index === 2 ? '2.8rem' : undefined,
          })
      );
    }
  }, [benefitContainer, hangers, windowSize]);

  return (
    <section className={styles.benefit} ref={benefitContainer}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.leftContent}>
            <div className={styles.heading}>
              <h2>
                Who will benefit from <span>Qilo?</span>
              </h2>
              <p>
                Our solution is customized to each individual depending on their
                specific needs.
              </p>
            </div>
            <ul>
              <li>
                <Check />
                <span>Individuals who have obesity and overweight</span>
              </li>
              <li>
                <Check />
                <span>
                  Diabetic and hypertensive patients looking to manage their
                  weight and conditions
                </span>
              </li>
              <li>
                <Check />
                <span>People Seeking to Heal Their Relationship with Food</span>
              </li>
              <li>
                <Check />
                <span>Seniors aiming for healthy aging</span>
              </li>
              <li>
                <Check />
                <span>Post-Weight Loss Surgery Patients</span>
              </li>
              <li>
                <Check />
                <span>Women with Hormone-Related Weight Gain eg PCOS</span>
              </li>
            </ul>
          </div>

          <div className={styles.hanging}>
            <div className={styles.hanger} ref={hangers[0].ref}>
              <div className={styles.top}>
                <LocalizedImage
                  srcus={Human1US}
                  srcinitial={Human1}
                  altinitial="Qilo user"
                />
              </div>
              <div className={styles.bottom}>
                <div className={styles.stack}>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.icon}>
                  <Image src={Star} alt="star" />
                </div>
              </div>
            </div>

            <div className={styles.hanger} ref={hangers[1].ref}>
              <div className={styles.top}>
                <LocalizedImage
                  srcus={Human2US}
                  srcinitial={Human2}
                  altinitial="Qilo user"
                />
              </div>
              <div className={styles.bottom}>
                <div className={styles.stack}>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.icon}>
                  <Image src={Circle} alt="star" />
                </div>
              </div>
            </div>

            <div className={styles.hanger} ref={hangers[2].ref}>
              <div className={styles.top}>
                <LocalizedImage
                  srcus={Human3US}
                  srcinitial={Human3}
                  altinitial="Qilo user"
                />
              </div>
              <div className={styles.bottom}>
                <div className={styles.stack}>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.icon}>
                  <Image src={Spin} alt="Spin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
