import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import newsReducer from "../features/news/newsSlice";
import slideReducer from "../features/slide/slideSlice";
import usersSlice from "../features/users/usersSlice";
import aboutUsReducer from "../features/reducers/aboutUsSlice";
import activitiesReducer from "../features/activities/activitiesSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
    slide: slideReducer,
<<<<<<< HEAD
    aboutUs: aboutUsReducer,
    activities: activitiesReducer,
=======
    users: usersSlice,
    // aboutUs: aboutUsReducer,
>>>>>>> 4b25e70882681b627abfa06041cb00ea23bff70c
  },
});
