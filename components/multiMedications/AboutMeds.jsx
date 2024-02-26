import React from 'react';
import Star from './ImgStar';
import { newLine } from '@/utils/formatLineBreaks';
import styles from './styles/about.module.scss';

export default function AboutMeds({ aboutSection }) {
  return (
    <section className={styles.aboutMeds}>
      <div className="container">
        <div className={styles.wrap}>
          <h2>{aboutSection?.heading}</h2>
          <p>{newLine(aboutSection?.description || '')}</p>
          <Star className={styles.starDecor} />
        </div>
      </div>
    </section>
  );
}
