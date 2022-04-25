import { Put, Post, Delete, Get } from "./privateApiService";

const activitiesURL = `${process.env.REACT_APP_API_URL_BASE}${process.env.REACT_APP_ACTIVITY_ROUTE}`;

const getActivities = () => Get(activitiesURL);

const getActivitiesById = (id) => Get(activitiesURL, id);

const updateActivity = (id, initialValues) =>
  Put(activitiesURL, id, initialValues);

const createActivity = (initialValues) => Post(activitiesURL, initialValues);

const deleteActivity = (id) => Delete(activitiesURL, id);

export {
  getActivities,
  getActivitiesById,
  updateActivity,
  createActivity,
  deleteActivity,
};
