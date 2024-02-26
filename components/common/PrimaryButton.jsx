import React from 'react';
import styles from './styles/primary-button.module.scss';

export default function PrimaryButton({ text, link, customStyles, ...rest }) {
  return (
    <button className={styles.button} styles={customStyles} {...rest}>
      {link && (
        <a href={link} target="_blank" rel="noreferrer noopener">
          {text}
        </a>
      )}
      {!link && <span>{text}</span>}
    </button>
  );
}
