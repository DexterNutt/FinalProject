import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchJobsFromApp,
  searchJobsFromApp,
  fetchJobsByStartupFromApp,
  createJobByStartup,
  fetchJobById,
} from "../../api/jobsApi";

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

export const fetchJobsByStartup = createAsyncThunk(
  "jobs/fetchJobsByStartup",
  async (startupId, { rejectWithValue }) => {
    try {
      const data = await fetchJobsByStartupFromApp(startupId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch startup jobs");
    }
  }
);

export const createJob = createAsyncThunk(
  "jobs/createJob",
  async (jobData, { rejectWithValue }) => {
    try {
      const data = await createJobByStartup(jobData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to create the job");
    }
  }
);

export const fetchJob = createAsyncThunk(
  "jobs/fetchJob",
  async (jobId, { rejectWithValue }) => {
    try {
      const data = await fetchJobById(jobId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch the job");
    }
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    job: null,
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
      })
      .addCase(fetchJobsByStartup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobsByStartup.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload.data.jobs;
      })
      .addCase(fetchJobsByStartup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch startup jobs";
      })
      .addCase(createJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create the job";
      })
      .addCase(fetchJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.loading = false;
        state.job = action.payload;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch the job";
      });
  },
});

export default jobsSlice.reducer;
