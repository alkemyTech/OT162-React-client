import { Get, Post, Put, Patch, Delete } from "./privateApiService";
import rutas from "../config/rutas";

const getCategories = () => {
  Get(rutas.GET_CATEGORIES_URL);
};

const getCategoriesById = (id) => {
  Get(rutas.GET_CATEGORIES_URL, id);
};

const postCategory = (body) => {
  Post(rutas.GET_CATEGORIES_URL, body);
};

const putCategory = (id, body) => {
  Put(rutas.GET_CATEGORIES_URL, id, body);
};

const deleteCategory = (id) => {
  Delete(rutas.GET_CATEGORIES_URL, id);
};

export {
  getCategories,
  getCategoriesById,
  postCategory,
  putCategory,
  deleteCategory,
};
