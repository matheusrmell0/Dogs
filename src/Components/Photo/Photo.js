import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const { data, error, loading, request } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    async function getPhoto() {
      const { url, options } = PHOTO_GET(id);
      await request(url, options);
    }
    getPhoto();
  }, [id, request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <section className={`containersingle mainContainer animeBotton`}>
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
