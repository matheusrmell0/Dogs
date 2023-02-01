import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/reducers/ui';
import { fetchPhoto } from '../../store/reducers/photo';

const FeedPhotosItem = ({ photo }) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  }
  return (
    <li onClick={handleClick} className={`${styles.photo}`}>
      <Image src={photo.src} alt={photo.title} />
      <span className={`${styles.views}`}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
