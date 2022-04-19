import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, deleteCategory } from "../../Services/categoriesApiService";

export const getCategoriesSlice = createAsyncThunk("category/getCategoriesSlice", async () => {
  return getCategories().then((res) => {
      return res.data.data;
  });
});

let idDelete = "";

export const deleteCategorySlice = createAsyncThunk("category/deleteCategorySlice", async (id) => {
  return deleteCategory(id).then((res) => {
    idDelete = id;
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
        [deleteCategorySlice.pending]: (state, action) => {
          state.status = "loading";
        },
        [deleteCategorySlice.fulfilled]: (state, { payload }) => {
          const categories = state.list.filter(category => {
            return category.id !== idDelete});
          state.list = [...categories];
          state.status = "success";
        },
        [deleteCategorySlice.rejected]: (state, action) => {
          state.status = "failed";
        }
    },
});

export default categoriesSlice.reducer;
