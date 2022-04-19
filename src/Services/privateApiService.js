import axios from "axios";

const GetAuth = () => {
  let token = localStorage.getItem("token");
  return token !== null ? `Bearer ${token}` : null;
};

const config = {
  headers: {
    // Group: 162, //Aqui va el ID del equipo!!
    "Content-Type": "application/json",
  },
};

const Put = (route, id, data) => {
  config.headers.Authorization = GetAuth();
  return axios.put(`${route}/${id}`, data, config);
};

const Patch = (ruta, obj, id) => {
  config.headers.Authorization = GetAuth();
  return axios.patch(`${ruta}/${id}`, obj, config);
};

const Get = (url, id) => {
  let httpURL;

  if (id) {
    httpURL = url + "/" + id;
  } else {
    httpURL = url;
  }
  return axios.get(httpURL, config);
};

const Post = (URL, Body) => {
  config.headers.Authorization = GetAuth();
  return axios.post(URL, Body, config);
};

const Delete = (path, id) => {
  config.headers.Authorization = GetAuth();
  return axios.delete(path + "/" + id, config);
};

export { Get, GetAuth, Post, Put, Patch, Delete };
