import React, { Fragment } from 'react';
import Layout from '@/Layout';
import BlogHeader from '@/components/blog/BlogHeader';
import CategoryNavigation from '@/components/blog/CategoryNavigation';
import PostGrid from '@/components/blog/PostGrid';
import PreFooterSection from '@/components/common/blog/PreFooterSection';
import * as prismic from '@prismicio/client';
import { isFilled, asLink } from '@prismicio/client';
import { createClient } from '@/prismicio';
//
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function BlogPage({ posts, categories, author }) {
  console.log(posts, 'posts');
  // console.log(categories, 'categories');
  // console.log(author, 'authors');

  return (
    <Layout title={'Blog'}>
      <BlogHeader posts={posts} />
      <CategoryNavigation categories={categories} />
      <PostGrid posts={posts} />
      <PreFooterSection isBlogSubscribe />
    </Layout>
  );
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });
  const translations = await serverSideTranslations(locale || 'en-US', [
    'common',
  ]);

  const posts = await client.getAllByType('blog_post', {
    orderings: [
      { field: 'my.blog_post.publication_date', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
    fetchLinks: ['author.fullname', 'blog_categories.name'],
  });

  const categories = await client.getAllByType('blog_categories', {
    orderings: [
      { field: 'my.blog_categories.publication_date', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  });

  const author = await client.getAllByType('author', {
    fetchLinks: ['blog_post.body'],
  });

  return {
    props: {
      ...translations,
      posts,
      categories,
      author,
    },
    revalidate: 60_000,
  };
}
