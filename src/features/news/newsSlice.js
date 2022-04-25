import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DeleteNews,
  GetNews,
  GetSingleNews,
  SearchNews,
} from "../../Services/newsApiService";

const initialNewsState = { data: [], status: "idle", error: null };

export const getAsyncNewsThunk = createAsyncThunk("url/news", async () => {
  return GetNews().then((res) => {
    return res.data.data;
  });
});
export const getAsyncNewsByIdThunk = createAsyncThunk(
  "url/newsById",
  async (id) => {
    return GetSingleNews(id).then((res) => {
      return res.data.data;
    });
  }
);
export const searchAsyncNewsThunk = createAsyncThunk(
  "url/newsSearch",
  async (searchParam) => {
    return SearchNews(searchParam).then((res) => {
      return res.data.data;
    });
  }
);

export const deleteAsyncNewsThunk = createAsyncThunk(
  "url/deleteNews",
  async (id) => {
    return DeleteNews(id).then((res) => {
      return res.data.data;
    });
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: initialNewsState,
  extraReducers: {
    [getAsyncNewsThunk.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAsyncNewsThunk.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getAsyncNewsThunk.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getAsyncNewsByIdThunk.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAsyncNewsByIdThunk.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getAsyncNewsByIdThunk.rejected]: (state, action) => {
      state.status = "failed";
    },
    [searchAsyncNewsThunk.pending]: (state, action) => {
      state.status = "loading";
    },
    [searchAsyncNewsThunk.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [searchAsyncNewsThunk.rejected]: (state, action) => {
      state.status = "failed";
    },
    [deleteAsyncNewsThunk.fulfilled]: (state, action) => {
      const Allnews = state.data.filter((news) => news.id !== action.meta.arg);

      state.data = [...Allnews];
      state.status = "success";
    },
  },
});

export default newsSlice.reducer;
