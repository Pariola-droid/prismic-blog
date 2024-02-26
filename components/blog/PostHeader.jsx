import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import { isFilled, asLink } from '@prismicio/client';
//
import PostAuthor from '../../assets/pages/blog/author.png';
import BlogImage from '../../assets/pages/blog/blogpost-image.jpg';
//
import styles from './styles/post-header.module.scss';

export default function PostHeader({ post }) {
  const date = post.data.publish_date;
  return (
    <header className={styles.postHeader}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.preContent}>
            <div className={styles.date}>
              {moment(date).format('MMMM DD, YYYY')}
            </div>
            <div className={styles.title}>
              <h2>{post.data.post_title}</h2>
            </div>
            <div className={styles.credits}>
              <div className={styles.author}>
                <div className={styles.authorImage}>
                  <Image
                    src={post.data.author.data?.avatar.url}
                    height={post.data.author.data?.avatar.dimensions?.height}
                    width={post.data.author.data?.avatar.dimensions?.width}
                    alt={`${post.data.author.data?.fullname} avatar`}
                  />
                </div>
                <div className={styles.authorName}>
                  <small className={styles.label}>WRITTEN bY</small>
                  <h5>{post.data.author.data?.fullname}</h5>
                </div>
              </div>
              {/*  */}
              <div className={styles.author}>
                <div className={styles.authorImage}>
                  <Image
                    src={post.data.reviewer.data?.avatar.url}
                    height={post.data.reviewer.data?.avatar.dimensions?.height}
                    width={post.data.reviewer.data?.avatar.dimensions?.width}
                    alt={`${post.data.reviewer.data?.fullname} avatar`}
                  />
                </div>
                <div className={styles.authorName}>
                  <small className={styles.label}>Medically reviewed BY </small>
                  <h5>{post.data.reviewer.data?.fullname}</h5>
                </div>
              </div>
            </div>
            <div className={styles.bigImage}>
              <div className={`${styles.category} ${styles.weight}`}>
                {post.data?.blog_category?.data?.name}
              </div>
              <Image
                src={post.data.thumbnail.url}
                width={post.data.thumbnail.dimensions?.width}
                height={post.data.thumbnail.dimensions?.height}
                alt={`${post.data.post_title} thumbnail`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
