import { useState } from 'react';
import styled from 'styled-components';
import GameBoard from './components/GameBoard';
import { clone, makeGameBoard, NUM_COLS, NUM_ROWS } from './utils';

const StyledApp = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: React.FC = () => {
  const [board, setBoard] = useState(makeGameBoard(NUM_COLS, NUM_ROWS));

  const handleCellClick = (col: number, row: number) => {
    console.log('handleCellClick');
    const boardClone = clone(board);
    boardClone[col][row] = board[col][row] ? 0 : 1;
    setBoard(boardClone);
  };

  return (
    <StyledApp>
      <GameBoard board={board} onCellClick={handleCellClick} />
    </StyledApp>
  );
};

export default App;
