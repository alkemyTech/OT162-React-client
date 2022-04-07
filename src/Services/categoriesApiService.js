import { Get, Post, Put, Patch, Delete } from "./privateApiService";

const categoriesRoute = `${process.env.URL_BASE}${process.env.CATEGORIES_ROUTE}` 

const getCategories = () => {
  Get(categoriesRoute);
};

const getCategoriesById = (id) => {
  Get(categoriesRoute, id);
};

const postCategory = (data) => {
  Post(categoriesRoute, data);
};

const putCategory = (id, data) => {
  Put(categoriesRoute, id, data);
};
const patchCategory = (id, data) => {
  Patch(categoriesRoute, id, data);
};

const deleteCategory = (id) => {
  Delete(categoriesRoute, id);
};

export {
  getCategories,
  getCategoriesById,
  postCategory,
  putCategory,
  deleteCategory,
  patchCategory,
};
