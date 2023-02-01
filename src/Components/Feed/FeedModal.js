import React from 'react';
import styles from './FeedModal.module.css';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/reducers/ui';

const FeedModal = () => {
  const { modal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.photo);

  React.useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;
  return (
    <div
      onClick={({ target, currentTarget }) => {
        if (target === currentTarget) dispatch(closeModal());
      }}
      className={`${styles.modal}`}
    >
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
