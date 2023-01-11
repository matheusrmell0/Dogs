import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [infinite, setInfinite] = React.useState(true);
  const [pages, setPages] = React.useState([1]);

  React.useEffect(() => {
    let wait = false;
    const events = ['wheel', 'scroll'];
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = (document.body.offsetHeight - window.innerHeight) * 0.75;
        if (scroll > height && !wait) {
          setPages((prev) => [...prev, prev.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    events.forEach((event) => window.addEventListener(event, infiniteScroll));
    return () =>
      events.forEach((event) =>
        window.removeEventListener(event, infiniteScroll),
      );
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          setInfinite={setInfinite}
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};
Feed.protoTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
