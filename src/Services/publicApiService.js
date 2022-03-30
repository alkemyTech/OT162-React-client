import axios from 'axios';

const config = {
    headers: {
        Group: 162                //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
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