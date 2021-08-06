import { createSlice } from "@reduxjs/toolkit";
import CreateBoard from "../utils/CreatedBoard";
import revealed from "../utils/Reveal";

const newBoard = CreateBoard(16, 16, 40);
const initialState = {
  grid: newBoard.board,
  nonMinecount: 16 * 16 - 40,
  mineLocations: newBoard.mineLocation,
};

export const MinesweeperSlice = createSlice({
  name: "Minesweeper",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateFlag: (state, action) => {
      const x = action.payload[0];
      const y = action.payload[1];
      state.grid[x][y].flagged = !state.grid[x][y].flagged;
    },
    revealCell: (state, action) => {
      const x = action.payload[0];
      const y = action.payload[1];
      state.grid[x][y].revealed = true;
      if (state.grid[x][y].value === "X") {
        alert("game over");
        for (let i = 0; i < state.mineLocations.length; i++) {
          state.grid[state.mineLocations[i][0]][
            state.mineLocations[i][1]
          ].revealed = true;
        }
      } else {
        [state.grid, state.nonMinecount] = revealed(
          state.grid,
          x,
          y,
          state.nonMinecount
        );
      }
    },
  },
});

export const { updateFlag, revealCell } = MinesweeperSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGrid = (state) => state.Minesweeper.grid;
export const selectNonMinecount = (state) => state.Minesweeper.nonMinecount;
export default MinesweeperSlice.reducer;
