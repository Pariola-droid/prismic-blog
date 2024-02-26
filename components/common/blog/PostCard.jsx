import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { isFilled, asLink } from '@prismicio/client';
import { PrismicRichText, SliceZone } from '@prismicio/react';
//
import PostImage from '../../../assets/pages/blog/postcard-image.jpg';
//
import styles from './styles/post-card.module.scss';

export default function PostCard({ post }) {
  const date = post.data.publish_date;
  return (
    <div className={styles.postCard}>
      <div className={styles.postImage}>
        <Link href={`/blog/post/${post.uid}`}>
          <Image
            src={post.data.thumbnail.url}
            width={post.data.thumbnail.dimensions?.width}
            height={post.data.thumbnail.dimensions?.height}
            alt={`${post.data.post_title} thumbnail`}
          />
        </Link>
      </div>

      <div className={styles.postContent}>
        <div className={styles.topProps}>
          <small>{moment(date).format('MMMM DD, YYYY')}</small> <span>•</span>{' '}
          <small>{post.data.author.data?.fullname}</small>
        </div>

        <div className={styles.title}>
          <Link href={`/blog/post/${post.uid}`}>
            <h3>{post.data.post_title}</h3>
          </Link>
        </div>

        <div className={styles.excerpt}>
          <PrismicRichText field={post.data.post_excerpt} />
        </div>

        <div className={`${styles.category} ${styles.weight}`}>
          {post.data?.blog_category?.data?.name}
        </div>
      </div>
    </div>
  );
}
