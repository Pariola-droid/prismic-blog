import React from 'react';
//
import styles from './styles/references.module.scss';

export default function Reference({ referenceSection, title }) {
  return (
    <section className={styles.reference}>
      <div className="container">
        <div className={styles.wrap}>
          <h2>
            Read more about {title}{' '}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10.5"
                stroke="#043D3B"
                strokeWidth="3"
              />
              <path
                d="M14.684 17.5L12.428 13.612H10.748V17.5H8.54V6.3H13.02C14.0547 6.3 14.9347 6.66267 15.66 7.388C16.3853 8.11333 16.748 8.988 16.748 10.012C16.748 10.7053 16.5507 11.3507 16.156 11.948C15.7613 12.5347 15.2387 12.9773 14.588 13.276L17.068 17.5H14.684ZM10.748 8.364V11.676H13.02C13.436 11.676 13.7933 11.516 14.092 11.196C14.3907 10.8653 14.54 10.4707 14.54 10.012C14.54 9.55333 14.3907 9.164 14.092 8.844C13.7933 8.524 13.436 8.364 13.02 8.364H10.748Z"
                fill="#043D3B"
              />
            </svg>
          </h2>
          <ul className={styles.sourceList}>
            {referenceSection?.map((reference, index) => (
              <li className={styles.source} key={index}>
                <div>
                  <h4>{reference?.title}</h4>
                  <p>
                    <a
                      href={reference?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {reference?.description}
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
