import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DeleteNews, GetNews } from "../../Services/newsApiService";

const initialNewsState = { data: [], status: "loading...", error: null };

export const getAsyncNewsThunk = createAsyncThunk("url/news", async () => {
  return GetNews().then((res) => {
    console.log(res.data.data);
    return res.data.data;
  });
});

export const deleteAsyncNewsThunk = createAsyncThunk(
  "url/deleteNews",
  async (id) => {
    return DeleteNews(id).then((res) => {
      console.log(res.data.data);
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
    [deleteAsyncNewsThunk.fulfilled]: (state, action) => {
      const Allnews = state.data.filter(
        (news) => news.id !== action.payload.id
      );

      state.data = [...Allnews];
      state.status = "success";
    },
  },
});

export default newsSlice.reducer;
