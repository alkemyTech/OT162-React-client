import { createSlice } from "@reduxjs/toolkit";

const initialNewsState = {isShown = false};

const newsSlice = createSlice({
  name: "newsState",
  initialState: initialNewsState,
  reducers: {
    showNewsReducer(state) {
      state.isShown = true;
    },
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice.reducer;
