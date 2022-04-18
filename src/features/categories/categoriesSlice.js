import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../Services/categoriesApiService";

export const getCategoriesSlice = createAsyncThunk("category/getCategoriesSlice", async () => {
    return getCategories().then((res) => {
        return res.data.data;
    });
  });

const categoriesSlice = createSlice({
    name: "category",
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: {
        [getCategoriesSlice.pending]: (state, action) => {
          state.status = "loading";
        },
        [getCategoriesSlice.fulfilled]: (state, { payload }) => {
          state.list = payload;
          state.status = "success";
        },
        [getCategoriesSlice.rejected]: (state, action) => {
          state.status = "failed";
        },
    },
});

export default categoriesSlice.reducer;
