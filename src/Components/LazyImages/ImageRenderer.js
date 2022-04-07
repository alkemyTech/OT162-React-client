import React, { Suspense } from 'react'
const LazyImages = React.lazy(() => import('./LazyImages'));

const ImageRenderer = ({src, alt}) => {
  return (
    <>
          <Suspense fallback={<div>Loading...</div>}>
        <LazyImages src={src} alt={alt}/>
      </Suspense>
    </>
  )
}

export default ImageRenderer