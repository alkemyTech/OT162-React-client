import axios from 'axios';

const config = {
    headers: {
        Group: 162               //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const Post = (URL,Body,) => {
    return axios.post(URL,Body,{
        headers: {
          "Content-Type": "application/json",
          Authorization: GetAuth(),
        }})
}

const GetAuth = () => {
    let token = localStorage.getItem('token');
    return token !== null ? `Bearer ${token}` : null;
}

export {Get, GetAuth,Post};