// searchSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchUser } from "../../api/usersApi";

export const fetchMentors = createAsyncThunk(
  "search/fetchMentors",
  async (searchTerm) => {
    const data = await searchUser(searchTerm);
    return data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    results: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMentors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMentors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload;
      })
      .addCase(fetchMentors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
