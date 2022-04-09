import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import slideReducer from "../features/slide/slideSlice";
import usersSlice from "../features/users/usersSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    slide: slideReducer,
    users: usersSlice,
    // aboutUs: aboutUsReducer,
  },
});
