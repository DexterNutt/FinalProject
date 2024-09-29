import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setUserStorage } from "../../../../config/StorageFunctions";
import { registerUser } from "../../../../api/authApi";

export const registerToApp = createAsyncThunk(
  "auth/registerToApp",
  async ({ email, password, role, data }, thunkAPI) => {
    try {
      const response = await registerUser({
        email,
        password,
        role,
        mentorName: data.mentorName,
        startupName: data.startupName,
        address: data.address,
        representative: data.representative,
        photo: data.photo,
        skills: data.skills,
        phone: data.phone,
        title: data.title,
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Registration failed");
    }
  }
);

const initialState = {
  email: "",
  password: "",
  role: "startup",
  mentorData: { mentorName: "", photo: "" },
  startupData: { startupName: "", representative: "", address: "", photo: "" },
  token: null,
  user: null,
  error: null,
};

const registerSlice = createSlice({
  name: "auth",
  initialState,
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
      const { mentorName, imageUrl, skills, phone, title } = action.payload;
      state.mentorData = { mentorName, photo: imageUrl, skills, phone, title };
    },
    updateStartupData: (state, action) => {
      state.startupData = { ...state.startupData, ...action.payload };
    },
    updatePhoto: (state, action) => {
      if (state.role === "mentor") {
        state.mentorData.photo = action.payload;
      } else if (state.role === "startup") {
        state.startupData.photo = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerToApp.fulfilled, (state, action) => {
        const { token, username, photo } = action.payload;
        setUserStorage(token, username);
        state.token = token;
        state.user = username;
        state.error = null;
        state.photo = photo;
      })
      .addCase(registerToApp.rejected, (state, action) => {
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

export default registerSlice.reducer;
