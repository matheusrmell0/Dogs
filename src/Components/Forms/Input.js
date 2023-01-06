import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, label, name, value, onChange, onBlur, error }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
        <input
          id={name}
          name={name}
          className={styles.input}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
