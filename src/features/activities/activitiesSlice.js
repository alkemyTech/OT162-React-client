import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  updateActivity,
  createActivity,
  deleteActivity,
  getActivity,
} from "../../Services/activitiesApiService";

export const getActivities = createAsyncThunk(
  "activities/getActivities",
  async () => {
    return getActivity().then((res) => {
      return res.data.data;
    });
  }
);

export const addActivity = createAsyncThunk(
  "activities/addActivity",
  async (data) => {
    return createActivity(data).then((res) => {
      return res.data.data;
    });
  }
);

export const editActivity = createAsyncThunk(
  "activities/editActivity",
  async (id, data) => {
    return updateActivity(data).then((res) => {
      return res.data.data;
    });
  }
);

export const delete_Activity = createAsyncThunk(
  "activities/delete_Activity",
  async (id) => {
    return deleteActivity(id).then((res) => {
      return res.data.data;
    });
  }
);

const activitiesSlice = createSlice({
  name: "activity",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getActivities.pending]: (state, action) => {
      state.status = "loading";
    },
    [getActivities.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getActivities.rejected]: (state, action) => {
      state.status = "failed";
    },

    [addActivity.fulfilled]: (state, { payload }) => {
      state.list = [payload, ...state.list];
      state.status = "success";
    },
    
    [editActivity.fulfilled]: (state, { payload }) => {
      const activities = state.list.map((activity) => {
        if (activity.id === payload.id) {
          activity = payload;
        }
        return activity;
      });
      state.list = [...activities];
      state.status = "success";
    },

    [delete_Activity.fulfilled]: (state, { payload }) => {
      const activities = state.list.filter((activity) => activity.id !== payload.id);

      state.list = [...activities];
      state.status = "success";
    },
  },
});

export default activitiesSlice.reducer;
