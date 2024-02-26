import React, { Fragment } from 'react';
import TableOfContent from './TableOfContent';
import { SliceZone } from '@prismicio/react';
import styles from './styles/post-content.module.scss';

export default function PostContent({ slices, components }) {
  return (
    <section className={styles.contentContainer}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <div className={styles.leftWrapper}>
            <div className={styles.contentTable}>
              <div className={styles.contentTable_trigger}>
                <h1>Table of contents</h1>
                <button>
                  Collapse{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M20.1265 18.2115C20.3217 18.4048 20.5853 18.5132 20.86 18.5132C21.1347 18.5132 21.3983 18.4048 21.5935 18.2115C21.6898 18.1166 21.7664 18.0034 21.8186 17.8787C21.8709 17.7539 21.8978 17.62 21.8978 17.4847C21.8978 17.3495 21.8709 17.2156 21.8186 17.0908C21.7664 16.966 21.6898 16.8529 21.5935 16.758L15.7315 11.013C15.5358 10.82 15.2721 10.7118 14.9972 10.7118C14.7224 10.7118 14.4586 10.82 14.263 11.013L8.40097 16.758C8.3046 16.8529 8.22806 16.966 8.17582 17.0908C8.12358 17.2156 8.09668 17.3495 8.09668 17.4847C8.09668 17.62 8.12358 17.7539 8.17582 17.8787C8.22806 18.0034 8.3046 18.1166 8.40097 18.2115C8.59618 18.4048 8.85977 18.5132 9.13447 18.5132C9.40917 18.5132 9.67277 18.4048 9.86797 18.2115L14.9995 13.5L20.1265 18.2115Z"
                      fill="#36B887"
                    />
                  </svg>
                </button>
              </div>

              <TableOfContent slices={slices} />
            </div>

            <div className={styles.rawContent}>
              <SliceZone slices={slices} components={components} />
            </div>
          </div>

          <aside className={styles.rightWrapper}>
            <div>share me</div>
          </aside>
        </div>
      </div>
    </section>
  );
}
