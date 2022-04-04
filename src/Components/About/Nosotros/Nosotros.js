import {React,useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataAsync } from '../../../features/reducers/aboutUsSlice';
import Title from '../../Title/Title'

const Nosotros = () => {
    const {data, status, error} = useSelector( state => state.aboutUs );
    console.log(status)
   
    const dispatch = useDispatch();
   
    
    useEffect(() => {
     if( status === 'loading' ) {

       dispatch(getDataAsync())
     }
  }, [dispatch]);

  return (
    <div>
        <Title title={data.name} text={data.welcome_text} img={data.logo}/>
    </div>
  )
}

export default Nosotros