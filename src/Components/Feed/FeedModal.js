import React from 'react';
import styles from './FeedModal.module.css';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from '../../store/reducers/photo';

const FeedModal = ({ photo, setModalPhoto }) => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.photo);

  React.useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [photo, dispatch]);

  return (
    <div
      onClick={({ target, currentTarget }) => {
        if (target === currentTarget) setModalPhoto(null);
      }}
      className={`${styles.modal}`}
    >
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent/>}
    </div>
  );
};

export default FeedModal;
