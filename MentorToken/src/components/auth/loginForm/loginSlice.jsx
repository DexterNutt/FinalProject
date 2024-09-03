import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LogInUser } from "../../../api/authApi";
import {
  setUserStorage,
  removeUserStorage,
} from "../../../config/StorageFunctions";

const initialState = {
  token: null,
  user: null,
  error: null,
};

export const logInToApp = createAsyncThunk(
  "auth/logInToApp",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await LogInUser(email, password);
      return response.data;
    } catch (err) {
      return rejectWithValue("Invalid Credentials");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutUser: (state) => {
      removeUserStorage();
      state.token = null;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInToApp.fulfilled, (state, action) => {
        const { token, username } = action.payload;
        setUserStorage(token, username);
        state.token = token;
        state.user = username;
        state.error = null;
      })
      .addCase(logInToApp.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logOutUser } = authSlice.actions;
export default authSlice.reducer;
