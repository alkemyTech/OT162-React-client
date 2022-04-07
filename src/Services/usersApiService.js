import rutas from "../config/rutas";
import { Post, Get, Put, Delete } from "./privateApiService";

const getUsers = () => {
  return Get(rutas.GET_USERS_URL);
};

const getUserByID = (id) => {
  return Get(rutas.GET_USERS_URL, id);
};

const putUsers = (id, body) => {
  return Put(rutas.GET_USERS_URL, id, body);
};

const postUsers = (body) => {
  return Post(rutas.GET_USERS_URL, body);
};

const deleteUsers = (id) => {
  return Delete(rutas.GET_USERS_URL, id);
};

export { getUsers, getUserByID, putUsers, postUsers, deleteUsers };
