import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
        // update state object, however appropriate, to show the user what we are loading
        state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        // show the user that the request is finished
        state.isLoading = false;
        state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
        // show the user that the request failed
        state.Loading = false;
        state.error = action.error;
    });
  }
});

export const usersReducer = usersSlice.reducer;
