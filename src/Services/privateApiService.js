import axios from "axios";

const config = {
  headers: {
    Group: 162, //Aqui va el ID del equipo!!
  },
};

const Put = (route, id, data) => {
  axios
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
<<<<<<< HEAD
        Group: 1                //Aqui va el ID del equipo!!
    }
}
=======
      "Content-Type": "application/json",
      Authorization: GetAuth(),
    },
  });
};
// "https://jsonplaceholder.typicode.com/users"
const Get = (url, id) => {
  const auth = GetAuth();
  config.headers.authorization = auth;
  let httpURL;
>>>>>>> f102a00023101b4f36d0cc765b98e3e8c1f943ed

  if (id) {
    httpURL = url + "/" + id;
  } else {
    httpURL = url;
  }
  console.log(httpURL);
  axios
    .get(httpURL, config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const Post = (URL, Body) => {
  axios
    .post(URL, Body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: GetAuth(),
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
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
    axios
      .delete(baseURL + pathSection + "/" + idContent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
};

export { Get, GetAuth, Post, Put, Patch, Delete };
