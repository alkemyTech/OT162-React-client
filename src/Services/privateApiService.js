import axios from "axios";

const config = {
  headers: {},
};

const Put = (route, id, data) => {
  return axios
    .put(`${route}/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: GetAuth(),
      },
    })
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
// "https://jsonplaceholder.typicode.com/users"
const Get = async (url, id) => {
  const auth = GetAuth();
  config.headers.authorization = auth;
  let httpURL;

  if (id) {
    httpURL = url + "/" + id;
  } else {
    httpURL = url;
  }
  return await axios.get(httpURL, config);
};

const Post = (URL, Body) => {
  return axios.post(URL, Body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: GetAuth(),
    },
  });
};

const GetAuth = () => {
  let token = localStorage.getItem("token");
  return token !== null ? `Bearer ${token}` : null;
};

const Delete = (path, id) => {
  let token = localStorage.getItem("token");
  let baseURL = "https://ongapi.alkemy.org/api/";
  let pathSection = path;
  let idContent = id;

  if (token !== null || token !== undefined) {
    return axios
      .delete(baseURL + pathSection + "/" + idContent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
};

export { Get, GetAuth, Post, Put, Patch, Delete };
