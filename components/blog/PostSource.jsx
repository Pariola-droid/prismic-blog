import React from 'react';
//
import styles from './styles/post-source.module.scss';

export default function PostSource({ post }) {
  return (
    <section className={styles.postSource}>
      <div className="container">
        <div className={styles.wrap}>
          <h2>Sources</h2>
          <ul className={styles.sourceList}>
            {post.data.sources.map((source, index) => (
              <li className={styles.source} key={index}>
                <div>
                  <h4>{source.source_title}</h4>
                  <p>
                    <a
                      href={source.source_link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.source_description}
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
