import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import newsReducer from "../features/news/newsSlice";
import slideReducer from "../features/slide/slideSlice";
import usersSlice from "../features/users/usersSlice";
import aboutUsReducer from "../features/reducers/aboutUsSlice";
import activitiesReducer from "../features/activities/activitiesSlice";
import membersSlice from '../features/reducers/membersSlice';
import categoriesSlice from '../features/categories/categoriesSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
    slide: slideReducer,
    aboutUs: aboutUsReducer,
    activities: activitiesReducer,
    users: usersSlice,
    // aboutUs: aboutUsReducer,
    members: membersSlice,
    categories: categoriesSlice
  },
});
