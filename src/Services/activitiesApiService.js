import { Put, Post, Delete, Get } from "./privateApiService";

const activitiesUrl = `${process.env.REACT_APP_ACTIVITIES_ROUTE}`;

const getActivity = () => {
  return Get(activitiesUrl);
};

const updateActivity = (initialValues) => {
  let id = initialValues.id;
  return Put(activitiesUrl, id, initialValues);
};

const createActivity = (initialValues) => {
  return Post(activitiesUrl, initialValues);
};

const deleteActivity = (activity) => {
  return Delete(activitiesUrl, activity);
};

export { updateActivity, createActivity, deleteActivity, getActivity };
