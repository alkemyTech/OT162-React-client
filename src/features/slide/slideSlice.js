import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSlideList } from "../../Services/slideService";

export const getSlides = createAsyncThunk("slide/getSlides", async () => {
  return getSlideList().then((res) => {
    return res.data.data;
  });
});

const slideSlice = createSlice({
  name: "slide",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getSlides.pending]: (state, action) => {
      state.status = "loading";
    },
    [getSlides.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getSlides.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default slideSlice.reducer;
