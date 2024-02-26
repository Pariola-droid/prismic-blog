import React from 'react';
import styles from './styles/primary-button-outline.module.scss';

export default function PrimaryOutlineButton({
  text,
  link,
  click,
  customStyles,
}) {
  return (
    <button className={styles.button} style={customStyles} onClick={click}>
      {link ? <a href={link}>{text}</a> : <span>{text}</span>}
    </button>
  );
}
