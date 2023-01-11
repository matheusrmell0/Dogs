import React from 'react';
import styles from './PhotoCommentsForm.module.css';
import useFetch from '../../Hooks/useFetch';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import { COMMENT_POST } from '../../api';
import Error from '../Helper/Error';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { error, loading, request } = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((prev) => [...prev, json]);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${single ? styles.single : ''}`}
    >
      <textarea
        className={`${styles.textarea}`}
        id="commnet"
        name="comment"
        placeholder="Comente algo fofo"
        onChange={({ target }) => setComment(target.value)}
        value={comment}
      />
      {loading ? (
        <button className={`${styles.button}`} disabled>
          <Enviar />
        </button>
      ) : (
        <button className={`${styles.button}`}>
          <Enviar />
        </button>
      )}
      {error && <Error error={error} />}
    </form>
  );
};

export default PhotoCommentsForm;
