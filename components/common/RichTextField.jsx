import { PrismicRichText, PrismicLink } from '@prismicio/react';
import styles from './styles/rich-text.module.scss';
import Image from 'next/image';

export const richTextComponents = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>;
    }
  },
  heading1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
  heading2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
  heading3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
  heading4: ({ children }) => <h4 className={styles.h4}>{children}</h4>,
  heading5: ({ children }) => <h5 className={styles.h5}>{children}</h5>,
  heading6: ({ children }) => <h6 className={styles.h6}>{children}</h6>,
  paragraph: ({ children }) => <p className={styles.p}>{children}</p>,
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className={styles.a}>
      {children}
    </PrismicLink>
  ),
  list: ({ children, node }) => {
    if (node.data) {
      return <ol className={styles.ol}>{children}</ol>;
    }
    return <ul className={styles.ul}>{children}</ul>;
  },
  image: ({ node }) => {
    return (
      <div className={styles.image}>
        <Image
          src={node.url}
          alt={node.alt}
          width={node.dimensions.width}
          height={node.dimensions.height}
        />
      </div>
    );
  },
};

export const RichTextField = ({ field }) => {
  return <PrismicRichText field={field} components={richTextComponents} />;
};
