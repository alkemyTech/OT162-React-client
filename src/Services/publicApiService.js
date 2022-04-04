import axios from 'axios';
import swal from 'sweetalert'

const config = {
    headers: {
        Group: 162                //Aqui va el ID del equipo!!
    }
}
const baseUrl = 'https://ongapi.alkemy.org/api'

const Get = async (endpoint, id) => {
    try{
        if(id){
          const resp= await axios.get(`${baseUrl}/${endpoint}/${id}`,config)
          const {success,message, data} = resp.data
          if(success){
              return data
          } else {
              swal('Error', message, 'error')
          }
          
    
        } else{
            const resp= await  axios.get(`${baseUrl}/${endpoint}`, config)
            const {success,message, data} = resp.data
            if(success){
                return data
            } else {
                swal('Error', message, 'error')
            }
            
           
          
        }

    }
    catch(error){
            console.log(error)
            swal('Error', 'Oops! Something went wrong', 'error')


    }
}

const Post = (endpoint, body) => {
    axios.post('https://ongapi.alkemy.org/api/' + endpoint, body)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
    return (
        <></>
    )
}

export {Get, Post}