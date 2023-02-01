import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewPhotos, resetFeedStates } from '../../store/reducers/feed';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';

const Feed = ({ user }) => {
  const { infinite, loading, error, list } = useSelector((state) => state.feed);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(resetFeedStates());
    dispatch(loadNewPhotos({ user, total: 3 }));
  }, [dispatch, user]);

  React.useEffect(() => {
    let wait = false;
    const events = ['wheel', 'scroll'];
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = (document.body.offsetHeight - window.innerHeight) * 0.8;
        if (scroll > height && !wait) {
          dispatch(loadNewPhotos({ user, total: 3 }));
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
  }, [infinite, dispatch, user]);

  return (
    <div>
      <FeedModal />

      {list.length > 0 && <FeedPhotos />}
      {loading && <Loading />}
      {error && <Error error={error} />}

      {!infinite && !user && (
        <p
          style={{
            textAlign: 'center',
            padding: '2rem 0 4rem 0',
            color: '#888',
          }}
        >
          Não existem mais postagens.
        </p>
      )}
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
