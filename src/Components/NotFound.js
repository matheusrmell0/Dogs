import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    let wait = false;
    function navFeed() {
      navigate('/');
    }
    if (!wait) {
      setTimeout(navFeed, 2000);
      wait = true;
    }
    setTimeout(() => {
      wait = false;
    }, 500);
  }, [navigate]);

  return (
    <div className="container mainContainer">
      <h1 className="title">Erro: 404 😓</h1>
      <p style={{ fontSize: '1.3rem', fontFamily: 'var(--type-second)' }}>
        Página não encontrada.
      </p>
    </div>
  );
};

export default NotFound;
