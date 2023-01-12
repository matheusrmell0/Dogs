import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import styles from './UserProfile.module.css';
import Head from '../Helper/Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <>
      <Head title={`@${user}`} desc={`Página do usuário ${user}`} />
      <section className={`${styles.profile}`}>
        <h1 className="title headerTitle">@{user}</h1>
        <Feed user={user} />
      </section>
    </>
  );
};

export default UserProfile;
