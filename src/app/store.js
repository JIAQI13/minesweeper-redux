import { configureStore } from "@reduxjs/toolkit";
import MinesweeperReducer from "../components/Minesweeper";

export const store = configureStore({
  reducer: {
    Minesweeper: MinesweeperReducer,
  },
});
