import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import newsReducer from "./newsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    newsShow: newsReducer,
  },
});
