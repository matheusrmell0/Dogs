import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validation() && password.validation()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <>
      <Head title="Login" desc="Página para login do usuário" />
      <section className={`animeLeft`}>
        <h1 className="title">Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input name="username" label="Usuário" type="text" {...username} />
          <Input name="password" label="Senha" type="password" {...password} />
          {loading ? (
            <Button disabled>Entrando...</Button>
          ) : (
            <div className={styles.logEntrar}>
              <Button>Entrar</Button>
              <Error error={error} />
            </div>
          )}
        </form>
        <Link className={styles.lostpassword} to="/login/lostpassword">
          Perdeu a senha?
        </Link>
        <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta?</p>
          <Link className={`${stylesBtn.button}`} to="/login/criar">
            Cadastre-se
          </Link>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
