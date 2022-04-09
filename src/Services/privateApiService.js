import axios from "axios";

const GetAuth = () => {
  let token = localStorage.getItem("token");
  return token !== null ? `Bearer ${token}` : null;
};

const config = {
  headers: {
    Group: 162, //Aqui va el ID del equipo!!
    "Content-Type": "application/json",
    Authorization: GetAuth(),
  },
};

const Put = (route, id, data) => axios.put(`${route}/${id}`, data, config);

const Patch = (ruta, obj, id) => axios.patch(`${ruta}/${id}`, obj, config);

const Get = (url, id) => {
  let httpURL;

  if (id) {
    httpURL = url + "/" + id;
  } else {
    httpURL = url;
  }
  return axios.get(httpURL, config);
};

const Post = (URL, Body) => axios.post(URL, Body, config);

const Delete = (path, id) => axios.delete(path + "/" + id, config);

export { Get, GetAuth, Post, Put, Patch, Delete };
