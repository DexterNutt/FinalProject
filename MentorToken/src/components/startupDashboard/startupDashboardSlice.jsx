import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/properties";
import axios from "axios";

export const fetchStartupData = createAsyncThunk(
  "startupDashboard/fetchStartupData",
  async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${api.localRoute}/api/v1/dashboard/startup`,
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

const startupDashboardSlice = createSlice({
  name: "startupDashboard",
  initialState: {
    startupData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStartupData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStartupData.fulfilled, (state, action) => {
        state.loading = false;
        state.startupData = action.payload;
      })
      .addCase(fetchStartupData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default startupDashboardSlice.reducer;
