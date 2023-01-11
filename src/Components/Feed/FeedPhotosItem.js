import React from 'react';
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick(){
    setModalPhoto(photo)
  }
  return (
    <li onClick={handleClick} className={`${styles.photo}`}>
      <img src={photo.src} alt={photo.title} />
      <span className={`${styles.views}`}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
