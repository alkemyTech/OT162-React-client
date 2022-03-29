import axios from "axios";
import { GetAuth } from "./privateApiService";

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

const News = (url, id) => {
  const auth = GetAuth();
  config.headers.authorization = auth;
  let httpURL = "https://ongapi.alkemy.org/api/users";

  if (id) {
    httpURL = url + "/" + id;
  } else {
    httpURL = url;
  }
  axios
    .get(httpURL, config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default (Get, News);
