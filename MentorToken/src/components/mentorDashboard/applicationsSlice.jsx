import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchApplicationsFromApp,
  submitApplicationToApp,
} from "../api/applicationsApi";

export const fetchApplications = createAsyncThunk(
  "applications/fetchApplications",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchApplicationsFromApp();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch applications");
    }
  }
);

export const submitApplication = createAsyncThunk(
  "applications/submitApplication",
  async (applicationData, { rejectWithValue }) => {
    try {
      const data = await submitApplicationToApp(applicationData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to submit application");
    }
  }
);

const applicationsSlice = createSlice({
  name: "applications",
  initialState: {
    applications: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload;
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(submitApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.applications.push(action.payload);
      })
      .addCase(submitApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default applicationsSlice.reducer;
