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

const GetAuth = () => {
    let token = localStorage.getItem('token');
    return token !== null ? `Bearer ${token}` : null;
}

const Delete = (path, id) => {
    let token = localStorage.getItem('token');
    let baseURL = 'https://ongapi.alkemy.org/api/';
    let pathSection = path;
    let idContent = id;

    if(token !== null || token !== undefined){
        axios.delete(baseURL + pathSection + '/' + idContent)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
}

export {Get, GetAuth, Delete};