import React from 'react';

const useMedia = (media) => {
  const [mobile, setMobile] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMobile(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => window.removeEventListener('resize', changeMatch);
  }, [media]);

  return {
    mobile,
  };
};

export default useMedia;
