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
const Patch = (ruta, obj, id) => {
  return axios.patch(`${ruta}/${id}`, obj, {
    headers: {
      "Content-Type": "application/json",
      Authorization: GetAuth(),
    },
  });
};

export { Get, Patch };
