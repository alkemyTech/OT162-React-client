import axios from "axios";

const config = {
  headers: {
    Group: 01, //Aqui va el ID del equipo!!
  },
};

const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const Put = (route, identifier, data) => {
  axios
    .put(route, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT goes here",
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default Get;

// Criterios de aceptación: El método deberá recibir una ruta destino, un identificador y
// un objeto con la estructura de datos para enviar en el BODY. Deberá invocar el método para agregar
// el encabezado Authorization en base al token del usuario y realizar una petición PUT. Agregarlo en privateApiService.js.
