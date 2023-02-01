import React from 'react';
import Input from '../../Components/Forms/Input';
import Button from '../../Components/Forms/Button';
import styles from './UserPhotoPost.module.css';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';
import { fetchPhotoPost } from '../../store/reducers/photoPost';
import { useDispatch, useSelector } from 'react-redux';

const UserPhotoPost = () => {
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector((state) => state.photoPost);
  const { token } = useSelector((state) => state.token.data);
  const navigate = useNavigate();
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});

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

    if (token) {
      dispatch(fetchPhotoPost({ formData, token }));
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
      <Head title="Poste sua foto" desc="Página de postagem de fotos" />
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
