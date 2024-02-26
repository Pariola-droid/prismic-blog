import React from 'react';
import Image from 'next/image';
//
import LTwisted from '../../assets/pages/faq/left-twisted.svg';
import RTwisted from '../../assets/pages/faq/right-twisted.svg';
//
import PrimaryButton from '../common/PrimaryButton';
import styles from './styles/contact-form.module.scss';

export default function ContactForm() {
  return (
    <section className={styles.contactForm}>
      <div className="container">
        <div className={styles.wrap}>
          {/*  */}
          <Image
            src={LTwisted}
            alt="left-twisted illustration"
            className={styles.lt}
            data-animation="rotate-up"
          />
          <div className={styles.heading}>
            <h2>Contact Form</h2>
            <p>
              Send us a message to receive updates. For partnership requests,
              kindly include your company name and requirements in the message.
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.inputField}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className={styles.inputField}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <PrimaryButton text={'Get Started'} type={'submit'} />
          </form>

          <Image
            src={RTwisted}
            alt="right-twisted illustration"
            className={styles.rt}
            data-animation="rotate-down"
          />
        </div>
      </div>
    </section>
  );
}
