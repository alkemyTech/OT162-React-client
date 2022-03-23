import React from 'react'
import './title.css'


const Title = ({title, text, img}) => {
  
  return (
    <div className="hero">

    <div   className='hero__img' style ={ { backgroundImage: `url( ${img ? img : '/images/placeholder/1920x680.png' })`,backgroundRepeat:"no-repeat",
    backgroundSize:"cover", 
    backgroundPosition:"center",
    position: 'relative',
    height: "50%",
    } }>
       <div className='hero__text'> 
       
       <h1 className='hero__text__title'>{title}</h1>
       <p className='hero__text__body'>{text} </p>
       </div> 
   

  

    </div>
    </div>

  )
}

export default Title