import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchApplicationsFromApp,
  submitApplicationToApp,
  acceptJobOfferInApp,
  rejectJobOfferInApp,
  fetchApplicationsToJobFromApp,
} from "../../api/applicationsApi";

export const fetchApplications = createAsyncThunk(
  "applications/fetchApplications",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchApplicationsFromApp();
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch applications");
    }
  }
);

export const fetchApplicationsToJob = createAsyncThunk(
  "applications/fetchApplicationsToJob",
  async (jobId, { rejectWithValue }) => {
    try {
      const response = await fetchApplicationsToJobFromApp(jobId);
      return response;
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

export const acceptJobOffer = createAsyncThunk(
  "applications/acceptApplication",
  async (applicationId, { rejectWithValue }) => {
    try {
      const data = await acceptJobOfferInApp(applicationId);
      return { applicationId, data };
    } catch (error) {
      return rejectWithValue(error.message || "Failed to accept application");
    }
  }
);

export const rejectJobOffer = createAsyncThunk(
  "applications/rejectApplication",
  async (applicationId, { rejectWithValue }) => {
    try {
      const data = await rejectJobOfferInApp(applicationId);
      return { applicationId, data };
    } catch (error) {
      return rejectWithValue(error.message || "Failed to reject application");
    }
  }
);

const applicationsSlice = createSlice({
  name: "applications",
  initialState: {
    applications: [],
    applicationsToJob: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all Applications
      .addCase(fetchApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload.applications;
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })

      //Fetch applications to a specific job
      .addCase(fetchApplicationsToJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplicationsToJob.fulfilled, (state, action) => {
        console.log("Applications payload:", action.payload);
        state.loading = false;
        state.applicationsToJob = action.payload.data.applications;
      })
      .addCase(fetchApplicationsToJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Failed to fetch applications";
      })

      // Submit a New Application
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
      })

      // Accept a Job Offer
      .addCase(acceptJobOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(acceptJobOffer.fulfilled, (state, action) => {
        state.loading = false;
        const { applicationId } = action.payload;
        const applicationIndex = state.applications.findIndex(
          (app) => app._id === applicationId
        );
        if (applicationIndex !== -1) {
          state.applications[applicationIndex].status = "in progress";
        }
      })
      .addCase(acceptJobOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to accept application";
      })

      // Reject a Job Offer
      .addCase(rejectJobOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(rejectJobOffer.fulfilled, (state, action) => {
        state.loading = false;
        const { applicationId } = action.payload;
        const applicationIndex = state.applications.findIndex(
          (app) => app._id === applicationId
        );
        if (applicationIndex !== -1) {
          state.applications[applicationIndex].status = "rejected";
        }
      })
      .addCase(rejectJobOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to reject application";
      });
  },
});

export default applicationsSlice.reducer;
