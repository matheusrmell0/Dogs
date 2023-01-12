import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.querySelector('title').innerText.charAt(7).toUpperCase();
    document.title = `Dogs | ${props.title}`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', props.desc || '');
  }, [props]);
  return <></>;
};

export default Head;
