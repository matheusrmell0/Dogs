import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const commentsSection = React.useRef();
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${
          props.single ? styles.single : ''
        } animeBotton`}
      >
        {comments.map((comment) => (
          <li className="animeLeft" key={comment.comment_ID}>
            <b >{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
            <br />
            <span className={`${styles.date}`}>{comment.comment_date}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm single={props.single} setComments={setComments} {...props} />}
    </>
  );
};

export default PhotoComments;
