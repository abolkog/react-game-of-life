import { useState } from 'react';
import styled from 'styled-components';
import Controls from './components/Controls';
import GameBoard from './components/GameBoard';
import {
  checkLiveNeighbours,
  clone,
  makeGameBoard,
  NUM_COLS,
  NUM_ROWS,
} from './utils';

const StyledApp = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: React.FC = () => {
  const [board, setBoard] = useState(makeGameBoard(NUM_COLS, NUM_ROWS));
  const [generation, setGeneration] = useState(0);

  const handleCellClick = (col: number, row: number) => {
    const boardClone = clone(board);
    boardClone[col][row] = board[col][row] ? 0 : 1;
    setBoard(boardClone);
  };

  const handleNextGen = () => {
    const boardClone = clone(board);
    for (let col = 0; col < NUM_COLS; col++) {
      for (let row = 0; row < NUM_ROWS; row++) {
        const currentCellState = board[col][row];
        let updatedState = currentCellState;

        const liveNeighbours = checkLiveNeighbours(board, col, row);

        const shouldDie = liveNeighbours < 2 || liveNeighbours > 3;

        if (currentCellState === 0 && liveNeighbours === 3) {
          updatedState = 1;
        } else if (currentCellState === 1 && shouldDie) {
          updatedState = 0;
        }

        boardClone[col][row] = updatedState;
      }
    }
    setGeneration(prevGen => prevGen + 1);
    setBoard(boardClone);
  };

  const handleReset = () => {
    setGeneration(0);
    setBoard(makeGameBoard(NUM_COLS, NUM_ROWS));
  };

  return (
    <StyledApp>
      <Controls
        generation={generation}
        onNextGen={handleNextGen}
        onReset={handleReset}
      />
      <GameBoard board={board} onCellClick={handleCellClick} />
    </StyledApp>
  );
};

export default App;
