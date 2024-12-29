import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchMedia } from "../../shared/api/omdb-service";
import { MediaSearchResult } from "../../shared/models/Media";

export interface MediaState {
  searchResults: MediaSearchResult[];
  totalResults: number;
  error: string | null;
  loading: boolean;
  searchQuery: {
    title: string;
    year?: string;
    type: "movie" | "series" | "episode";
    page: number;
  };
}

const initialState: MediaState = {
  searchResults: [],
  totalResults: 0,
  error: null,
  loading: false,
  searchQuery: {
    title: "Pokemon",
    year: undefined,
    type: "movie",
    page: 1,
  },
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
        return response.data;
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
  reducers: {
    updateTitle: (state, action) => {
      state.searchQuery.title = action.payload;
    },
    updateYear: (state, action) => {
      state.searchQuery.year = action.payload;
    },
    updatePage: (state, action) => {
      state.searchQuery.page = action.payload;
    },
    updateType: (state, action) => {
      state.searchQuery.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload.Search;
        state.totalResults = parseInt(action.payload.totalResults);
      })
      .addCase(search.rejected, (state, action) => {
        state.loading = false;
        state.searchResults = [];
        state.totalResults = 0;
        state.error = action.payload as any;
      });
  },
});

export const { updateTitle, updateYear, updatePage, updateType } =
  mediaSlice.actions;
export default mediaSlice.reducer;
