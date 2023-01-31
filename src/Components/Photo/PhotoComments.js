import React from 'react';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';
import { useSelector } from 'react-redux';

const PhotoComments = (props) => {
  const commentsSection = React.useRef();
  const { data } = useSelector((state) => state.user);
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
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
            <br />
            <span className={`${styles.date}`}>{comment.comment_date}</span>
          </li>
        ))}
      </ul>
      {data && (
        <PhotoCommentsForm
          single={props.single}
          setComments={setComments}
          {...props}
        />
      )}
    </>
  );
};

export default PhotoComments;
