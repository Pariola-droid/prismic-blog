import React, { Fragment } from 'react';
import Layout from '@/Layout';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import { isFilled, asLink } from '@prismicio/client';
import BlogHeader from '@/components/blog/BlogHeader';
import CategoryNavigation from '@/components/blog/CategoryNavigation';
import PostGrid from '@/components/blog/PostGrid';
import PreFooterSection from '@/components/common/blog/PreFooterSection';
//
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function BlogCategory({ categoryPosts, categories }) {
  console.log(categoryPosts, 'categoryPosts');

  // categoryPosts.forEach((post) => {
  //   console.log(post.data.blog_category.data.name, 'post');
  // });

  return (
    <Layout>
      {/* <BlogHeader posts={categoryPosts} /> */}
      <CategoryNavigation categories={categories} />
      {/* <PostGrid /> */}
      <PreFooterSection isBlogSubscribe />
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const categoryPosts = await client.getAllByType('blog_post', {
    predicates: [prismic.filter.at('my.blog_post.blog_category', params.uid)],
    orderings: [
      { field: 'my.blog_post.publication_date', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
    fetchLinks: [
      'author.fullname',
      'blog_categories.name',
      'blog_categories.uid',
    ],
  });

  const categories = await client.getAllByType('blog_categories', {
    orderings: [
      { field: 'my.blog_categories.publication_date', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  });

  console.log('page params', params);
  console.log('page params uid', params.uid);
  console.log('categoryPost -----> ', categoryPosts);

  return {
    props: { categoryPosts, categories },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType('blog_categories');

  return {
    paths: pages.map((page) => {
      return asLink(page);
    }),
    fallback: false,
  };
}
