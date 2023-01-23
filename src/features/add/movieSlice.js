import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlist: JSON.parse(localStorage.getItem("watchlist")) || [],
  watched: JSON.parse(localStorage.getItem("watched")) || [],
};

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    addMovieToWatchList: (state, action) => {
      if (!state.watchlist.some((obj) => obj.id === action.payload.id)) {
        state.watchlist.unshift(action.payload);
      }
    },

    addMovieToWatched: (state, action) => {
      if (!state.watched.some((obj) => obj.id === action.payload.id)) {
        state.watched.unshift(action.payload);
      }
    },

    deleteMovieFromWatchList: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (obj) => obj.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addMovieToWatchList,
  addMovieToWatched,
  deleteMovieFromWatchList,
} = movieSlice.actions;

export default movieSlice.reducer;
