import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import NotFound from '../NotFound';
import Head from '../Helper/Head';
import { useSelector } from 'react-redux';

const User = () => {
  const { data } = useSelector(state => state.user);

  return (
    <section className={`container`}>
      <Head
        title={`Minha conta @${data.nome} `}
        desc="Página da conta logada do usuário"
      />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
