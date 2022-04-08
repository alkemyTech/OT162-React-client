import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import newsReducer from "../features/news/newsSlice";
import slideReducer from "../features/slide/slideSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
    slide: slideReducer,
    aboutUs: aboutUsReducer,
  },
});
