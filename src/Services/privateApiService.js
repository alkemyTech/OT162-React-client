import axios from "axios";

const config = {
  headers: {
    Group: 162, //Aqui va el ID del equipo!!
  },
};

const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const Put = (route, id, data) => {
  axios
    .put(`${route}/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "TOKEN goes here",
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default Get;
