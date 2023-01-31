import React from 'react';
import { useParams } from 'react-router-dom';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';
import Head from '../Helper/Head';
import { fetchPhoto } from '../../store/reducers/photo';
import { useDispatch, useSelector } from 'react-redux';

const Photo = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(state => state.photo);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [id, dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <>
        <Head
          title={data.photo.title}
          desc={`Foto da petzinha ${data.photo.title}`}
        />
        <section className={`containersingle mainContainer animeBotton`}>
          <PhotoContent single={true} />
        </section>
      </>
    );
  else return null;
};

export default Photo;
