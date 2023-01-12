import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const location = useLocation();
  const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas 📊');
        break;
      case '/conta/postar':
        setTitle('Poste uma foto 🐶');
        break;
      default:
        setTitle('Minha conta ✅');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className={`title headerTitle`}>{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
