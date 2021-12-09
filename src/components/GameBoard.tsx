import styled from 'styled-components';
import Cell from './Cell';

type GameBoardProps = {
  board: number[][];
  onCellClick: (col: number, row: number) => void;
};

const StyledGrid = styled.div<{ repeat: number }>`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.repeat}, 35px)`};
`;

const GameBoard: React.FC<GameBoardProps> = ({ board, onCellClick }) => (
  <StyledGrid data-testid="grid" repeat={board.length}>
    {board.map((col, colIndex) =>
      col.map((row, rowIndex) => (
        <Cell
          key={`cell_${colIndex}_${rowIndex}`}
          onClick={() => onCellClick(colIndex, rowIndex)}
          active={board[colIndex][rowIndex] === 1}
        />
      ))
    )}
  </StyledGrid>
);

export default GameBoard;
