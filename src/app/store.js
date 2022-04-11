import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import slideReducer from "../features/slide/slideSlice";
import aboutUsReducer from "../features/reducers/aboutUsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    slide: slideReducer,
    // aboutUs: aboutUsReducer,
  },
});
