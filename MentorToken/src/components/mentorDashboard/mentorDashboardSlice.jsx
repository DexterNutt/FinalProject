import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/properties";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "mentorDashboard/fetchUserData",
  async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${api.localRoute}/api/v1/dashboard/mentor`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
);

export const fetchMentorById = createAsyncThunk(
  "mentors/fetchMentorById",
  async (mentorId, { rejectWithValue }) => {
    try {
      const response = await fetchMentorsDetails(mentorId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch mentor details");
    }
  }
);

const mentorDashboardSlice = createSlice({
  name: "mentorDashboard",
  initialState: {
    userData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mentorDashboardSlice.reducer;
