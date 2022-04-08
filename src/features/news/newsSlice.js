import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Get } from "../../Services/publicApiService";

const initialNewsState = { data: {}, status: "loading...", error: null };

export const getAsyncNewsThunk = createAsyncThunk("url/news", async () => {
  try {
    const resp = await Get("news");
    return resp;
  } catch (err) {
    console.log(err);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState: initialNewsState,
  reducers: {
    [getAsyncNewsThunk.pending]: (state, action) => {
      return { ...state, status: "loading..." };
    },
    [getAsyncNewsThunk.fulfilled]: (state, action) => {
      return { ...state, data: { ...action.payload }, status: "success" };
    },
    [getAsyncNewsThunk.rejected]: (state, action) => {
      return { ...state, status: "failed :(" };
    },
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice.reducer;
