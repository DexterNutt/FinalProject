import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJobsFromApp, searchJobsFromApp } from "../api/jobsApi";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchJobsFromApp();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch jobs");
    }
  }
);

export const searchJobs = createAsyncThunk(
  "jobs/searchJobs",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const data = await searchJobsFromApp(searchTerm);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to search jobs");
    }
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(searchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(searchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default jobsSlice.reducer;
