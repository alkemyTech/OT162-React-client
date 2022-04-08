import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSlideList, postSlide, deleteSlide } from "../../Services/slideService";

export const getSlides = createAsyncThunk("slide/getSlides", async () => {
  return getSlideList().then((res) => {
    return res.data.data;
  });
});

export const addSlide = createAsyncThunk("slide/addSlide", async (data) => {
  return postSlide(data).then((res) => {
    return res.data.data;
  });
});

export const editSlide = createAsyncThunk("slide/editSlide", async (id,data) => {
 //service hasn't been implemented yet
});

export const delete_Slide = createAsyncThunk("slide/delete_Slide", async (id) => {
  return deleteSlide(id).then((res) => {
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


    [addSlide.fulfilled]: (state, { payload }) => {
      state.list = [payload, ...state.list];
      state.status = "success";
    },
    [editSlide.fulfilled]: (state, { payload }) => {
      const slides = state.list.map(slide => {
        if (slide.id === payload.id) {
            slide = payload;
        }
        return slide;
    });
      state.list = [...slides];
      state.status = "success";
    },
    [delete_Slide.fulfilled]: (state, { payload }) => {
      const slides = state.list.filter(slide =>
        slide.id !== payload.id);

      state.list = [...slides];
      state.status = "success";
    },
  },
});

export default slideSlice.reducer;
