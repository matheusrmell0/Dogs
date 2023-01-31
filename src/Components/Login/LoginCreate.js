import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import Head from '../Helper/Head';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/reducers/user';

const LoginCreate = () => {
  const { request, loading, error } = useFetch();
  const dispatch = useDispatch();
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok)
      dispatch(
        userLogin({ username: username.value, password: password.value }),
      );
  }

  return (
    <>
      <Head title="Criar conta" desc="Página para criação de um novo usuário" />
      {loading && <Loading />}
      <section className={`animeLeft`}>
        <h1 className={`title titlepassword`}>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Usuário"
            name="username"
            type="text"
            id="username"
            {...username}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            id="email"
            {...email}
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            id="password"
            {...password}
          />
          {loading ? (
            <Button disabled>Cadastrando...</Button>
          ) : (
            <Button>Cadastre-se</Button>
          )}
          <Error error={error} />
        </form>
      </section>
    </>
  );
};

export default LoginCreate;
