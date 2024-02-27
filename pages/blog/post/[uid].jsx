import React from 'react';
import Layout from '@/Layout';
import { isFilled, asLink } from '@prismicio/client';
import { components } from '@/slices';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
//
import PostHeader from '@/components/blog/PostHeader';
import PostSource from '@/components/blog/PostSource';
import RelatedArticles from '@/components/blog/RelatedArticles';
import SubscribeSection from '@/components/common/blog/PreFooterSection';
import PostContent from '@/components/blog/PostContent';
//
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function BlogPost({ page, relatedArticles }) {
  return (
    <Layout
      title={page.data.meta_title || page.data.post_title}
      description={page.data.meta_description || page.data.post_description}
      image={page.data.meta_image.url || page.data.thumbnail.url}
    >
      <PostHeader post={page} />
      <PostContent slices={page.data.slices} components={components} />
      <PostSource post={page} />
      <RelatedArticles posts={relatedArticles} />
      <SubscribeSection />
    </Layout>
  );
}

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });
  const translations = await serverSideTranslations(locale || 'en-US', [
    'common',
  ]);

  const page = await client.getByUID('blog_post', params.uid, {
    fetchLinks: [
      'author.fullname',
      'author.avatar',
      'reviewer.fullname',
      'reviewer.avatar',
      'blog_categories.name',
    ],
  });

  const relatedArticles = await client.getAllByType('blog_post', {
    // filter by category - hmmm
    predicates: [prismic.filter.not('my.blog_post.uid', params.uid)],
    orderings: [
      { field: 'my.blog_post.publication_date', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
    fetchLinks: [
      'author.fullname',
      'author.avatar',
      'reviewer.fullname',
      'reviewer.avatar',
      'blog_categories.name',
    ],
    limit: 3,
  });

  return {
    props: {
      ...translations,
      page,
      relatedArticles,
    },
    revalidate: 60_000,
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType('blog_post');

  return {
    paths: pages.map((page) => {
      return asLink(page);
    }),
    fallback: false,
  };
}
