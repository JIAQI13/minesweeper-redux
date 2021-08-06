import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Minesweeper";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
