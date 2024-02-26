import React from 'react';
import Image from 'next/image';
//
import styles from './styles/floating-container.module.scss';

export default function FloatingContainer({ customStyles, caption, icon }) {
  return (
    <div
      className={styles.floatingContainer}
      style={{
        backgroundColor: customStyles?.backgroundColor,
      }}
    >
      <div className={styles.icon}>
        <Image src={icon} alt="icon" />
      </div>
      <span>{caption}</span>
    </div>
  );
}
