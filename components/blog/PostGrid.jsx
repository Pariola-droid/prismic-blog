import React from 'react';
//
import PostCard from '../common/blog/PostCard';
import PrimaryOutlineButton from '../common/PrimaryOutlineButton';
//
import styles from './styles/post-grid.module.scss';

export default function PostGrid({ posts }) {
  return (
    <section className={styles.postGrid}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.grid}>
            {posts?.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          {/*  */}
          <PrimaryOutlineButton
            text="Load more articles"
            customStyles={{
              color: '#043D3B',
            }}
            onClick={() => console.log('Load More')}
          />
        </div>
      </div>
    </section>
  );
}
