import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//
import styles from './styles/alternative.module.scss';

const linkFormatter = (string) => {
  return string.toLowerCase().replace(/\s/g, '-');
};

export default function Alternative({ alternativeSection }) {
  return (
    <Fragment>
      {alternativeSection && (
        <section className={styles.alternative}>
          <div className="container">
            <div className={styles.wrap}>
              <div className={styles.heading}>
                <h2>Alternative medication</h2>
                <p>{alternativeSection?.description}</p>
              </div>

              <div className={styles.medications}>
                {alternativeSection?.items.map((alternative, index) => (
                  <div
                    className={styles.box}
                    key={index}
                    style={{
                      backgroundColor: alternative.bgColor,
                    }}
                  >
                    <Link
                      href={`/medications/${linkFormatter(alternative?.name)}`}
                    />
                    <div className={styles.icon}>
                      <Image src={alternative.icon} alt={alternative.name} />
                    </div>
                    <small>{alternative.name}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
}
