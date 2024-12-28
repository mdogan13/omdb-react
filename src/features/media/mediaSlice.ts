import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchMedia } from "../../shared/api/omdb-service";

interface MediaState {
  searchResults: any; //TODO: add type
  error: string | null;
  loading: boolean;
}

const initialState: MediaState = {
  searchResults: [],
  error: null,
  loading: false,
};

export const search = createAsyncThunk(
  "media/search",
  async (
    searchQuery: {
      title: string;
      page: number;
      year?: string;
      type: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await searchMedia(searchQuery);
      console.log(response);
      if (response.data.Response === "True") {
        return response.data.Search;
      } else {
        throw new Error("No results found");
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const mediaSlice = createSlice({
  name: "media",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(search.rejected, (state, action) => {
        state.loading = false;
        state.searchResults = [];
        state.error = action.payload as any;
      });
  },
});

export default mediaSlice.reducer;
