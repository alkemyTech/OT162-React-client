import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import newsReducer from "../features/news/newsSlice";
import slideReducer from "../features/slide/slideSlice";
import aboutUsReducer from "../features/reducers/aboutUsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
    slide: slideReducer,
    // aboutUs: aboutUsReducer,
  },
});
