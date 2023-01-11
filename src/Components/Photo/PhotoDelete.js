import React from 'react';
import styles from './PhotoDelete.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../api';

const PhotoDelete = ({ id }) => {
  const { loading, error, request } = useFetch();

  async function handleClick() {
    if (window.confirm('Tem certeza?? 🥺')) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);

      if (response.ok) {
        window.location.reload();
      } else {
        alert(error);
      }
    }
  }

  return (
    <>
      {loading ? (
        <button
          style={{ color: 'black' }}
          disabled
          className={`${styles.delete}`}
        >
          Deletando... 😔
        </button>
      ) : (
        <button onClick={handleClick} className={`${styles.delete}`}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
