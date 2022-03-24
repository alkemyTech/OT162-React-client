import axios from 'axios';

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
          return resp.data
          
    
        } else{
            const resp= await  axios.get(`${baseUrl}/${endpoint}`, config)
            
           return resp.data
          
        }

    }
    catch(error){
            console.log(error)

    }
}

export default Get