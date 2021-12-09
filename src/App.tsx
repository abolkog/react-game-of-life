import styled from 'styled-components';
import GameBoard from './components/GameBoard';

const StyledApp = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const gameGrid = Array(20)
  .fill(null)
  .map(() =>
    Array(10)
      .fill(null)
      .map(() => 0)
  );

const App: React.FC = () => {
  return (
    <StyledApp>
      <GameBoard board={gameGrid} />
    </StyledApp>
  );
};

export default App;
