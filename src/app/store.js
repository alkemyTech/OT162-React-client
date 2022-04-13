import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import newsReducer from "../features/news/newsSlice";
import slideReducer from "../features/slide/slideSlice";
import usersSlice from "../features/users/usersSlice";
import aboutUsReducer from "../features/reducers/aboutUsSlice";
import membersSlice from '../features/reducers/membersSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
    slide: slideReducer,
    users: usersSlice,
    // aboutUs: aboutUsReducer,
    members: membersSlice,
  },
});
