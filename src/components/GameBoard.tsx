import styled from 'styled-components';
import Cell from './Cell';

type GameBoardProps = {
  board: number[][];
};

const StyledGrid = styled.div<{ repeat: number }>`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.repeat}, 30px)`};
`;

const GameBoard: React.FC<GameBoardProps> = ({ board }) => {
  return (
    <StyledGrid data-testid="grid" repeat={board.length}>
      {board.map((col, colIndex) =>
        col.map((row, rowIndex) => (
          <Cell
            key={`cell_${colIndex}_${rowIndex}`}
            active={rowIndex % 2 === 0}
            onClick={() =>
              console.log(`Clicked on Cell ${colIndex},${rowIndex}`)
            }
          />
        ))
      )}
    </StyledGrid>
  );
};

export default GameBoard;
