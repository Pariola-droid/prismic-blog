import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
//
import Sketch from '../../assets/common/footer/sketch.svg';
import Star from '../../assets/common/footer/star.svg';
//
import PrimaryButton from './PrimaryButton';
import styles from './styles/pre-footer.module.scss';

export default function PreFooter({ heading, description }) {
  return (
    <section className={styles.preFooter}>
      <div className="container">
        <div className={styles.wrap}>
          <Image
            src={Sketch}
            className={styles.illy_sketch}
            alt="Qilo illustration"
          />

          {heading ? (
            <h2 className={styles.custom}>{heading}</h2>
          ) : (
            <h2>Backed by science</h2>
          )}

          {description ? (
            <p>{description}</p>
          ) : (
            <p>
              Our approach is rooted in science, guiding you from the cycle of
              trial and error to evidence-based methods. It's time to break free
              from the old routine and embrace a lasting change with Qilo - the
              last program you'll ever need to start.
            </p>
          )}

          <PrimaryButton text="Get Started Now" link={'https://app.qilo.co/'} />

          <Image
            src={Star}
            className={styles.illy_star}
            alt="Qilo illustration"
            data-animation="footer-star"
          />
        </div>
      </div>
    </section>
  );
}
