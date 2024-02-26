import React, { useState, useEffect, Fragment } from 'react';
import { scroller } from 'react-scroll';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { medicationData } from '@/data/getMedicationData';
//
import styles from './styles/recommended.module.scss';
import useWindowSize from '@/utils/useWindowSize';
import PrimaryOutlineButton from '../common/PrimaryOutlineButton';

export default function Recommended() {
  const router = useRouter();
  const windowSize = useWindowSize();
  const screenSizeThreshold = 990;
  const [showMoreMeds, setShowMoreMeds] = useState(false);
  const [showMoreMedsMobile, setShowMoreMedsMobile] = useState(false);

  const handleToggleShowMoreMeds = () => {
    setShowMoreMeds(!showMoreMeds);

    scroller.scrollTo('medicationsTop', {
      duration: 800,
      offset: -100,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    if (windowSize.width > screenSizeThreshold) {
      setShowMoreMedsMobile(false);
    } else {
      setShowMoreMedsMobile(true);
    }

    return () => {
      setShowMoreMedsMobile(false);
    };
  }, [windowSize]);

  Object.keys(medicationData).forEach((key) => {
    const medication = medicationData[key];
    console.log(`Medication ${key}:`, medication);
  });

  return (
    <section className={styles.recommend}>
      <div className="container">
        <div className={styles.wrap}>
          <h2>
            Medications recommended <span>by Qilo</span>
          </h2>

          <div name="medicationsTop" className={styles.medications}>
            {showMoreMedsMobile ? (
              <Fragment>
                {Object.keys(medicationData)
                  .slice(0, showMoreMeds ? medicationData.length : 4)
                  .map((key) => {
                    const medication = medicationData[key];
                    return (
                      <div
                        className={styles.box}
                        key={medication.id}
                        style={{
                          backgroundColor: medication.bg,
                        }}
                      >
                        <Link href={`/medications/${medication.page}`} />
                        <div className={styles.icon}>
                          <Image src={medication.icon} alt={medication.name} />
                        </div>
                        <small>{medication.name}</small>
                      </div>
                    );
                  })}
              </Fragment>
            ) : (
              <Fragment>
                {Object.keys(medicationData).map((key) => {
                  const medication = medicationData[key];
                  return (
                    <div
                      className={styles.box}
                      key={medication.id}
                      style={{
                        backgroundColor: medication.bg,
                      }}
                    >
                      <Link href={`/medications/${medication.page}`} />
                      <div className={styles.icon}>
                        <Image src={medication?.icon} alt={medication.name} />
                      </div>
                      <small>{medication.name}</small>
                    </div>
                  );
                })}
              </Fragment>
            )}
          </div>

          <PrimaryOutlineButton
            text={showMoreMeds ? 'Show less' : 'Show more'}
            customStyles={{
              color: '#E6FE55',
            }}
            click={handleToggleShowMoreMeds}
          />
        </div>
      </div>
    </section>
  );
}
