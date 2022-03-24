import axios from 'axios'
import {React,useEffect,useState} from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import rutas from '../../../config/rutas'

const Nosotros = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    
    useEffect(() => {
    axios
      .get(`${rutas.GET_SPECIFIC_ORGANIZATION_URL}`)
      .then((result) => {
        setTitle(result.data.data.name);
        setText(result.data.data.long_description);
      })
      .then((result) => {
          console.log(result)
      })
      .catch((e) => {
        console.log("ERROR", e.message);
      });
  }, []);

  return (
    <div>
        <HeroSection title={title} text={text}/>
    </div>
  )
}

export default Nosotros