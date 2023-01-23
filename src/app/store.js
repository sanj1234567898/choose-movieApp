import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/add/movieSlice";

export const store = configureStore({
  reducer: { movieReducer },
});
