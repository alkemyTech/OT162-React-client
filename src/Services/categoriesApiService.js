import { Get, Post, Put, Patch, Delete } from "./privateApiService";
import rutas from "../config/rutas";

const getCategories = () => {
  Get(rutas.GET_CATEGORIES_URL);
};

const getCategoriesById = (id) => {
  Get(rutas.GET_CATEGORIES_URL, id);
};

const postCategory = (data) => {
  Post(rutas.GET_CATEGORIES_URL, data);
};

const putCategory = (id, data) => {
  Put(rutas.GET_CATEGORIES_URL, id, data);
};
const patchCategory = (id, data) => {
  Patch(rutas.GET_CATEGORIES_URL, id, data);
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
  patchCategory,
};
