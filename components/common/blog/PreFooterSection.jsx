import React from 'react';
import Image from 'next/image';
//
import leftWhisker from '../../../assets/pages/blog/left-whiskers.svg';
import rightWhisker from '../../../assets/pages/blog/right-whiskers.svg';
//
import styles from './styles/prefooter.module.scss';

export default function PreFooterSection({ isBlogSubscribe }) {
  return (
    <section className={styles.subscription}>
      <div className="container">
        <div className={styles.wrap}>
          {isBlogSubscribe ? (
            <h2>Subscribe to our newsletter </h2>
          ) : (
            <h2>
              Your healthiest weight <br />
              awaits you{' '}
            </h2>
          )}

          {isBlogSubscribe ? (
            <p data-paragraph-type="text1">
              And get latest update on tips, products, and healthy ideas content
              for you.
            </p>
          ) : (
            <p data-paragraph-type="text2">
              Achieve a metabolic reset and shed extra weight using our
              science-based weight care plans. Why stick to counting calories,
              when you can improve your metabolic health?
            </p>
          )}

          {isBlogSubscribe && (
            <form className={styles.subForm}>
              <div className={styles.input}>
                <input type="text" placeholder="your@email.com" />
                <button type="submit">Subscribe</button>
              </div>
              <div className={styles.terms}>
                <input type="checkbox" id="agree" />
                <label htmlFor="agree">
                  I agree to receive email updates from Qilo.
                </label>
              </div>
            </form>
          )}

          {!isBlogSubscribe && (
            <a
              href="https://app.qilo.co/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.yellowBtn}
            >
              Get Started Now
            </a>
          )}

          {isBlogSubscribe ? (
            <Image
              src={rightWhisker}
              alt="Right decor"
              className={styles.rightWhisker}
              data-animation="rotate-down"
            />
          ) : (
            <Image
              src={leftWhisker}
              alt="Left decor"
              className={styles.leftWhisker}
              data-animation="rotate-up"
            />
          )}
        </div>
      </div>
    </section>
  );
}
