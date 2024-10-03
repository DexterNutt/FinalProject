import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchApplicationsFromApp,
  submitApplicationToApp,
  acceptJobOfferInApp,
  rejectJobOfferInApp,
} from "../../api/applicationsApi";

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
        state.applications = action.payload.data.application;
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
      })
      .addCase(acceptJobOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(acceptJobOffer.fulfilled, (state, action) => {
        state.loading = false;
        const applicationIndex = state.applications.findIndex(
          (app) => app._id === action.payload.applicationId
        );
        if (applicationIndex !== -1) {
          state.applications[applicationIndex].status = "in progress";
        }
      })
      .addCase(rejectJobOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(rejectJobOffer.fulfilled, (state, action) => {
        state.loading = false;
        const applicationIndex = state.applications.findIndex(
          (app) => app._id === action.payload.applicationId
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
