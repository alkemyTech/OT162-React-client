import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import slideReducer from "../features/slide/slideSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    slide: slideReducer,
  },
});
