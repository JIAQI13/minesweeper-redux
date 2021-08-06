## 1. How you organize components, and break up the board into smaller parts for reusability

- Board: the game baord with 16 \* 16 cells
- Cell: each square filled with number or mine
- Minesweeper: holds all the states and action

## 2. How you are passing state to the components and keeping track of counts

- states are sotred in redux and pass into components using useSelector hook
- counts are monitoried by one of the state in redux

## 3. How you are managing styling

- using prettier on vscode while coding
- using eslint for customized rules: npm run lint:fix

## 4. Complexity of functions that display a cell

- building a board with 16\*16 cells holding an object of its property
- display the cell with custome UI
- make sure the right part of cell is shown on click

## 5. How you are storing data in redux

- grid: the 16\*16 array with detailed info on each cell
- nonMinecount: score based on how many cell are shown
- mineLocations: all mines location on bard to display when game over
