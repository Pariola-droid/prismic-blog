import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import { PrismicRichText, SliceZone } from '@prismicio/react';
//
import styles from './styles/blog-header.module.scss';

export function ReadMoreIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="19"
      viewBox="0 0 24 19"
      fill="none"
    >
      <g clipPath="url(#clip0_47_3219)">
        <path
          d="M2.14258 9.74993H22.714M22.714 9.74993L14.9997 2.03564M22.714 9.74993L14.9997 17.4642"
          stroke="#043D3B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_47_3219">
          <rect
            width="23.1429"
            height="18"
            fill="white"
            transform="translate(0.857422 0.75)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function BlogHeader({ posts }) {
  return (
    <header className={styles.blogHeader}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.bigImage}>
            <Link href={`/blog/post/${posts?.[0]?.uid}`}>
              <Image
                src={posts?.[0]?.data?.thumbnail?.url}
                width={posts[0]?.data?.thumbnail?.dimensions?.width}
                height={posts[0]?.data?.thumbnail?.dimensions?.height}
                alt={`${posts[0].data.post_title} thumbnail`}
              />
            </Link>
          </div>

          <div className={styles.floatingContent}>
            <div className={styles.topProps}>
              <small>
                {moment(posts?.[0]?.data?.publish_date).format('MMMM DD, YYYY')}
              </small>{' '}
              <span>•</span> <small>Ralph Edwards</small>
            </div>
            <h2 className={styles.title}>{posts?.[0]?.data?.post_title}</h2>
            <div className={styles.excerpt}>
              <PrismicRichText field={posts?.[0]?.data?.post_excerpt} />
            </div>
            <div className={styles.bottomProps}>
              <div className={`${styles.category} ${styles.weightLoss}`}>
                {posts?.[0]?.data?.blog_category?.data?.name}
              </div>
              <Link
                href={`/blog/post/${posts?.[0]?.uid}`}
                className={styles.readLink}
              >
                <span>Read more</span>
                <ReadMoreIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
