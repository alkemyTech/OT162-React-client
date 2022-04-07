import axios from 'axios';


const config = {
  headers: {
    Group: 162, //Aqui va el ID del equipo!!
  },
};
const baseUrl = "https://ongapi.alkemy.org/api";

const Get = async (endpoint, id) => {
    try{
        if(id){
          const resp= await axios.get(`${baseUrl}/${endpoint}/${id}`,config)
          const {success, data} = resp.data
          if(success){
              return data
          } 
          
    
        } else{
            const resp= await  axios.get(`${baseUrl}/${endpoint}`, config)
            const {success,data} = resp.data
            if(success){
                return data
            } 
            
           
          
        }

    }
    catch(error){
        console.log(error)
    }
};

const Post = (endpoint, body) => {
  axios
    .post("https://ongapi.alkemy.org/api/" + endpoint, body)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return <></>;
};

export { Get, Post };
