import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';

const LoginCreate = () => {
  const { request, loading, error } = useFetch();
  const { userLogin } = React.useContext(UserContext);
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (!response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className={`animeLeft`}>
      <h1 className={`title`}>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          name="username"
          type="text"
          id="username"
          {...username}
        />
        <Input label="Email" name="email" type="email" id="email" {...email} />
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
        {error && <Error error={error} />}
      </form>
    </section>
  );
};

export default LoginCreate;
