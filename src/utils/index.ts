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
