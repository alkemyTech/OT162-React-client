import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import slideReducer from "../features/slide/slideSlice";
import aboutUsReducer from "../features/reducers/aboutUsSlice";
import membersSlice from '../features/reducers/membersSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    slide: slideReducer,
    aboutUs: aboutUsReducer,
    members: membersSlice,
  },
});
