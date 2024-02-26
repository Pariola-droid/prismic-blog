import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
//
import styles from './styles/category-navigation.module.scss';

export default function CategoryNavigation({ categories }) {
  const router = useRouter();

  return (
    <nav className={styles.category}>
      <div className="container">
        <div className={styles.wrap}>
          <ul className={styles.list}>
            <li
              className={`${styles.link} }
                    ${router?.pathname === '/blog' ? styles.active : ''}
                `}
            >
              <Link href={'/blog'}>All</Link>
            </li>
            {categories.map((category) => (
              <li
                key={category.id}
                className={`${styles.link}
                    ${router?.asPath === category?.url ? styles.active : ''}
                `}
                data-category={category?.uid}
              >
                <Link href={`/blog/category/${category?.uid}`}>
                  {category?.data?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
