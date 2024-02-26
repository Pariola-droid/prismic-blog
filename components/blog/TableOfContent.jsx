import React from 'react';
import Link from 'next/link';
import { PrismicRichText } from '@prismicio/react';
import { createHeadingId } from '@/utils/createHeadingId';

const TableOfContent = ({ slices }) => {
  return slices.map((slice) => {
    // we only have one Rich Text slice type named "content", but we could check others too
    if (slice.slice_type === 'rich_text') {
      // Pass our rich text for link generation
      // Then Return our links
      // We still need to build this component
      return <ContentLinks field={slice.primary.blog_content} />;
    }

    // we don't need anything else from other slices, so we just ignore them
    return null;
  });
};

const ContentLinks = ({ field }) => {
  return <PrismicRichText field={field} components={components} />;
};

const components = (type, element, content) => {
  // type Element
  if (type === 'heading1') {
    return (
      <Link href={`#${createHeadingId(content)}`}>
        <h1 id={`#${createHeadingId(content)}`}>{content}</h1>
      </Link>
    );
  }

  if (type === 'heading2') {
    return (
      <Link href={`#${createHeadingId(content)}`}>
        <h2 id={`#${createHeadingId(content)}`}>{content}</h2>
      </Link>
    );
  }

  if (type === 'heading3') {
    return (
      <Link href={`#${createHeadingId(content)}`}>
        <h3 id={`#${createHeadingId(content)}`}>{content}</h3>
      </Link>
    );
  }

  if (type === 'heading4') {
    return (
      <Link href={`#${createHeadingId(content)}`}>
        <h4 id={`#${createHeadingId(content)}`}>{content}</h4>
      </Link>
    );
  }

  return '';
};

export default TableOfContent;
