// src/components/Button/index.jsx
import React from 'react';
import styles from './styles.module.css';

function Button({ label, onClick, variant = 'primary' }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
