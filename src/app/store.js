import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import aboutUsReducer from '../features/reducers/aboutUsSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    aboutUs: aboutUsReducer,
  },
});
