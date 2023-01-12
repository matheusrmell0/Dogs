import React from 'react';
import Feed from '../Components/Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <>
      <Head title="Feed" desc="Página da home da rede social Dogs com o feed" />
      <section className={`container mainContainer`}>
        <Feed />
      </section>
    </>
  );
};

export default Home;
