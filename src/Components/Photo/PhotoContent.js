import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import PhotoDelete from './PhotoDelete';
import { UserContext } from '../../UserContext';
import Image from '../Helper/Image';

const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;
  const [idade, setIdade] = React.useState(null);

  React.useEffect(() => {
    if (photo.idade > 1) setIdade(<li>{`${photo.idade} anos`}</li>);
    else if (photo.idade < 0) setIdade(<li>{`${photo.idade} meses`}</li>);
    else if (photo.idade <= 0.1) setIdade(<li>{`${photo.idade} mês`}</li>);
    else setIdade(<li>{`${photo.idade} ano`}</li>);
  }, [photo.idade]);

  return (
    <div className={`${styles.photo}`}>
      <div className={`${styles.img}`}>
        <Image src={photo.src} alt={photo.title}/>
      </div>
      <div className={`${styles.details}`}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>{`@${photo.author}`}</Link>
            )}

            <span className={`${styles.views}`}>{photo.acessos}</span>
          </p>

          <h1>
            <Link className={`title ${styles.title}`} to={`/foto/${photo.id}`}>
              {photo.title}
            </Link>
          </h1>
          <ul className={`${styles.attributes}`}>
            <li>{`${photo.peso} kg`}</li>
            {idade}
          </ul>
        </div>
      </div>
      <PhotoComments comments={comments} id={photo.id} />
    </div>
  );
};

export default PhotoContent;
