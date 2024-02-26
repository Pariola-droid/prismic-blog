import React, { useEffect, useState } from 'react';
import Image from 'next/image';
//
import { newLine } from '@/utils/formatLineBreaks';
import PrimaryButton from '../common/PrimaryButton';
import HeroImage from '../../assets/pages/multi-medication/hero-image-wegovy.jpg';
import styles from './styles/header.module.scss';

export default function Header({ heroSection }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <div
            className={styles.content}
            style={{
              backgroundColor: heroSection?.color,
            }}
          >
            <h1>{heroSection?.heading} </h1>
            <p>{newLine(heroSection?.description || '')}</p>
            <PrimaryButton
              text="Let's get started!"
              link={'https://app.qilo.co'}
            />
          </div>
          <div className={styles.image}>
            <Image
              src={heroSection?.image}
              alt={`${heroSection?.name} - medication image`}
              className={styles.img}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
