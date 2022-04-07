import React, { Suspense } from 'react'
const LazyImages = React.lazy(() => import('./LazyImages'));

const ImageRenderer = ({link, desc}) => {
  return (
    <>
          <Suspense fallback={<div>Loading...</div>}>
        <LazyImages link={link} desc={desc}/>
      </Suspense>
    </>
  )
}

export default ImageRenderer