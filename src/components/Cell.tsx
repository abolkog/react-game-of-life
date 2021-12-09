import styled from 'styled-components';
import Clickable from './Clickable';

type CellProps = {
  active: boolean;
  onClick: () => void;
};

const StyledCell = styled.div<{ active: boolean }>`
  width: 35px;
  height: 35px;
  border: 1px solid #000;
  background-color: ${props => (props.active ? '#00cccc' : '#fff')};
`;

const Cell: React.FC<CellProps> = ({ active, onClick }) => (
  <Clickable onClick={onClick}>
    <StyledCell data-testid="cell" active={active} />
  </Clickable>
);

export default Cell;
