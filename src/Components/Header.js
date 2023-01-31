import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { useSelector } from 'react-redux';

const Header = () => {
  const { data } = useSelector(state => state.user)

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link className={styles.logo} to="/" aria-label="Dogs | Home">
          <Dogs />
        </Link>
        {data ? (
          <Link
            style={{fontWeight: 'bold' }}
            className={styles.login}
            to="/conta"
          >
            <div style={{ marginRight: '0.2rem' }}> {data.nome}</div>
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
