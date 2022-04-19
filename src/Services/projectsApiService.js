import { Get, Post, Put, Patch, Delete } from "./privateApiService";

const projectsRoute = `${process.env.REACT_APP_URL_BASE}${process.env.REACT_APP_PROJECTS_ROUTE}`;

const getProjects = () => Get(projectsRoute);

const getProjectsById = (id) => Get(projectsRoute, id);

const postProjects = (data) => Post(projectsRoute, data);

const putProjects = (id, data) => Put(projectsRoute, id, data);

const patchProjects = (id, data) => Patch(projectsRoute, id, data);

const deleteProjects = (id) => Delete(projectsRoute, id);

export {
  getProjects,
  getProjectsById,
  postProjects,
  putProjects,
  deleteProjects,
  patchProjects,
};
