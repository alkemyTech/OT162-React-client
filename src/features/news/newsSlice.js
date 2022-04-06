import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetNews } from "../../Services/newsApiService";

const initialNewsState = { news: [] };

export const getAsyncNewsSlice = createAsyncThunk("url/news", async () => {
  try {
    return await GetNews();
  } catch (err) {
    console.log(err);
  }
});

const newsSlice = createSlice({
  name: "newsState",
  initialState: initialNewsState,
  reducers: {
    showNewsReducer(state) {
      state.news = GetNews();
    },
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice.reducer;
