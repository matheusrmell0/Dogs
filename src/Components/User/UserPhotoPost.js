import React from 'react';
import Input from '../../Components/Forms/Input';
import Button from '../../Components/Forms/Button';
import styles from './UserPhotoPost.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const navigate = useNavigate();
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { error, loading, data, request } = useFetch();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('idade', idade.value);
    formData.append('peso', peso.value);

    const token = window.localStorage.getItem('token');
    if (token) {
      const { url, options } = PHOTO_POST(formData, token);
      await request(url, options);
    }
  }

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }

  return (
    <>
      <section className={`${styles.photoPost} animeLeft`}>
        <form onSubmit={handleSubmit}>
          <Input label="Nome" type="text" name="nome" id="nome" {...nome} />
          <Input label="Peso" type="text" name="peso" id="peso" {...peso} />
          <Input label="Idade" type="text" name="idade" id="idade" {...idade} />
          <input
            className={styles.file}
            type="file"
            name="img"
            id="img"
            onChange={handleImgChange}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          {error && <Error error={error} />}
        </form>
        <div>
          {img.preview && (
            <div
              className={`${styles.preview} animeLeft`}
              style={{ backgroundImage: `url('${img.preview}')` }}
            ></div>
          )}
        </div>
      </section>
    </>
  );
};

export default UserPhotoPost;
