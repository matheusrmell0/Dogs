import React from 'react';

const NotFound = () => {
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
