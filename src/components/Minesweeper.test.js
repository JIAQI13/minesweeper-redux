import MinesweeperReducer, { updateFlag, revealCell } from "./Minesweeper";
import CreateBoard from "../utils/CreatedBoard";

const newBoard = CreateBoard(16, 16, 40);

describe("Minesweeper reducer", () => {
  const initialState = {
    grid: [[{ value: 0, revealed: false, x: 0, y: 0, flagged: false }]],
    nonMinecount: 16 * 16 - 40,
    mineLocations: 123,
  };

  it("should updateflag", () => {
    const actual = updateFlag(initialState, 0, 0);
    // console.log(actual.payload.grid[0][0]);
    // console.log(actual);
    expect(actual.payload.grid[0][0].flagged).toEqual(false);
  });
});
