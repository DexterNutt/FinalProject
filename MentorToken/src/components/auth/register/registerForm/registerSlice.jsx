import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setUserStorage } from "../../../../config/StorageFunctions";
import { registerUser } from "../../../../api/authApi";
import { uploadImage } from "../../../../api/imagesApi";

export const registerToApp = createAsyncThunk(
  "register/registerToApp",
  async ({ email, password, role, data }, thunkAPI) => {
    try {
      let imageUrl = null;

      if (data.image) {
        const uploadResponse = await uploadImage(data.image);
        imageUrl = uploadResponse.filePath;
      }

      const response = await registerUser({
        email,
        password,
        role,
        mentorName: data.mentorName,
        startupName: data.startupName,
        address: data.address,
        representative: data.representative,
        imageUrl,
      });
      return response.data;
    } catch (error) {
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
  name: "register",
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
      state.mentorData = { ...state.mentorData, ...action.payload };
    },
    updateStartupData: (state, action) => {
      state.startupData = { ...state.startupData, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerToApp.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.username;
        state.error = null;
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
