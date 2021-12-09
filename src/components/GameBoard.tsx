import styled from 'styled-components';

type GameBoardProps = {
  board: number[][];
};

const StyledGrid = styled.div<{ repeat: number }>`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.repeat}, 30px)`};
`;

const StyledGridItem = styled.div<{ active: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  background-color: ${props => (props.active ? '#00cccc' : '#fff')};
`;

const GameBoard: React.FC<GameBoardProps> = ({ board }) => {
  return (
    <StyledGrid data-testid="grid" repeat={board.length}>
      {board.map(col =>
        col.map((row, r) => (
          <StyledGridItem key={`g_${r}`} active={r % 2 === 0} />
        ))
      )}
    </StyledGrid>
  );
};

export default GameBoard;
