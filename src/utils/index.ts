export const NUM_COLS = 10;
export const NUM_ROWS = 10;

/**
 * Helper function to make game board 2d array and initialise the values to zero
 * @param cols Number of desired colums
 * @param rows Number of desired rows
 * @returns
 */
export const makeGameBoard = (cols: number, rows: number) => {
  return Array(cols)
    .fill(null)
    .map(() =>
      Array(rows)
        .fill(null)
        .map(() => 0)
    );
};

/**
 * Helper to deep clone the board
 * @param board
 * @returns
 */
export const clone = (board: number[][]): number[][] => {
  return JSON.parse(JSON.stringify(board));
};

/**
 * Check neighbours and return live count
 * @param board The game board
 * @param col current cell col
 * @param row current cell row
 * @returns number of live neighbours
 */
export const checkLiveNeighbouts = (
  board: number[][],
  col: number,
  row: number
): number => {
  let neighbors = 0;
  for (let c = -1; c < 2; c++) {
    for (let r = -1; r < 2; r++) {
      const x = (col + c + NUM_COLS) % NUM_COLS;
      const y = (row + r + NUM_ROWS) % NUM_ROWS;

      neighbors += board[x][y];
    }
  }
  neighbors -= board[col][row];

  return neighbors;
};
