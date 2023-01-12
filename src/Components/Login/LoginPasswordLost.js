import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PASSWORD_LOST } from '../../api';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { error, loading, request, data } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validation()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('lostpassword', 'resetar'),
      });
      await request(url, options);
    }
  }

  return (
    <>
      <Head
        title="Resetar senha?"
        desc="Página para resetar a senha do usuário"
      />
      <section className={`animeLeft`}>
        <h1 className="title titlepassword">Perdeu a senha?</h1>
        {data ? (
          <p
            style={{
              fontFamily: 'var(--type-second)',
              fontSize: '1.5rem',
              color: '#4c1',
            }}
          >
            {data}
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              {...login}
              name="email"
              label="Email | Usuário"
              type="text"
            />
            {loading ? (
              <Button disabled>Enviando...</Button>
            ) : (
              <Button>Enviar email</Button>
            )}
          </form>
        )}
        <Error error={error} />
      </section>
    </>
  );
};

export default LoginPasswordLost;
