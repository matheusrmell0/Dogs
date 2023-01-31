import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import styles from './Login.module.css'
import NotFound from '../NotFound';
import { useSelector } from 'react-redux';

const Login = () => {
  const {data} = useSelector(state => state.user)

  if (data) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="lostpassword" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
    </section>
  );
};

export default Login;
