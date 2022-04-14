import React from 'react';


const LazyImages = ({src, alt}) => {
  return (
      <>
    <img src={src} alt={alt} />
      </>
  )
}

export default LazyImages