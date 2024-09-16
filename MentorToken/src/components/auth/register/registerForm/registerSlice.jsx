import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../../../../api/authApi";
import { setUserStorage } from "../../../../config/StorageFunctions";

// WATCH JONAS AND REFACTOR

export const registerToApp = createAsyncThunk(
  "register/registerToApp",
  async (
    {
      email,
      password,
      role,
      image,
      mentorName,
      startupName,
      address,
      representative,
    },
    thunkAPI
  ) => {
    try {
      const response = await registerUser(
        email,
        password,
        role,
        image,
        mentorName,
        startupName,
        address,
        representative
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Invalid Data");
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    token: null,
    user: null,
    email: "",
    password: "",
    role: "startup",
    image: "",
    mentorData: {},
    startupData: {},
    error: null,
  },
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateRole: (state, action) => {
      state.role = action.payload;
    },
    updateMentorData: (state, action) => {
      state.mentorData = action.payload;
    },
    updateStartupData: (state, action) => {
      state.startupData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerToApp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerToApp.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { token, user } = action.payload;
        setUserStorage(token, user);
        state.token = token;
        state.user = user;
      })
      .addCase(registerToApp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  updateEmail,
  updatePassword,
  updateRole,
  updateMentorData,
  updateStartupData,
} = registerSlice.actions;

export const selectToken = (state) => state.register.token;
export const selectUser = (state) => state.register.user;
export const selectStatus = (state) => state.register.status;
export const selectError = (state) => state.register.error;

export default registerSlice.reducer;
