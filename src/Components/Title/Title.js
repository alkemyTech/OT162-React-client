import React from 'react'
import './title.css'


const Title = ({title, text, img}) => {
  
  return (
    <div className="container">

    <div   className='container__img' style ={ { backgroundImage: `url( ${img ? img : '/images/placeholder/1920x680.png' })`,backgroundRepeat:"no-repeat",
    backgroundSize:"cover", 
    backgroundPosition:"center",
    position: 'relative',
    height: "50%"

    ,
    } }>
       <div className='container__text'> 
       
       <h1 className='container__text__title'>{title}</h1>
       <p className='container__text__body'>{text} </p>
       </div> 
   

  

    </div>
    </div>

  )
}

export default Title