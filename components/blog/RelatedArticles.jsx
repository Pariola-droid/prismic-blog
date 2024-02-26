import React from 'react';
//
import PostCard from '../common/blog/PostCard';
//
import styles from './styles/related-articles.module.scss';

export default function RelatedArticles({ posts }) {
  return (
    <section className={styles.relatedArticles}>
      <div className="container">
        <div className={styles.wrap}>
          <h2>Related articles you might like...</h2>

          <div className={styles.flexed}>
            {posts?.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
