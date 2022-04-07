import React from 'react';


const LazyImages = ({link, desc}) => {
  return (
      <>
    <img src={link} alt={desc} />
      </>
  )
}

export default LazyImages