import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, deleteUsers } from "../../Services/usersApiService";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addUsers: (state, action) => {
      state.usersList = action.payload;
    },
    removeUserById: (state, action) => {
      state.usersList = state.usersList.filter(
        (user) => user.id !== action.payload
      );
      deleteUsers(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(populateUsersList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(populateUsersList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.usersList = action.payload;
      })
      .addCase(populateUsersList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addUsers, removeUserById } = usersSlice.actions;

export const populateUsersList = createAsyncThunk(
  "users/populateUsersList",
  async () => {
    const response = await getUsers();
    console.log("response.data.data", response.data.data);
    const usersList = response.data.data;
    return usersList;
  }
);

export const selectUsersList = (state) => state.users.usersList;
export const selectUsersState = (state) => state.users.status;

export default usersSlice.reducer;
