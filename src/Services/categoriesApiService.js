import { Get, Post, Put, Patch, Delete } from "./privateApiService";

const categoriesRoute = `${process.env.REACT_APP_URL_BASE}${process.env.REACT_APP_CATEGORIES_ROUTE}`;

const getCategories = () => {
  return Get(categoriesRoute);
};

const getCategoriesById = (id) => {
  return Get(categoriesRoute, id);
};

const postCategory = (data) => {
  return Post(categoriesRoute, data);
};

const putCategory = (id, data) => {
  return Put(categoriesRoute, id, data);
};
const patchCategory = (id, data) => {
  return Patch(categoriesRoute, id, data);
};

const deleteCategory = (id) => {
  return Delete(categoriesRoute, id);
};

export {
  getCategories,
  getCategoriesById,
  postCategory,
  putCategory,
  deleteCategory,
  patchCategory,
};
