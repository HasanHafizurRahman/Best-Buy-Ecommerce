import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice.js";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
