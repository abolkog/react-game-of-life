import styled from 'styled-components';

type ControlsProps = {
  onReset: () => void;
  onNextGen: () => void;
  generation: number;
};

const StyledRoot = styled.div`
  margin: 15px 0px;
  & > * {
    margin-left: 10px;
  }
`;

const Controls: React.FC<ControlsProps> = ({
  onReset,
  onNextGen,
  generation,
}) => (
  <StyledRoot>
    <button onClick={onReset}>Reset</button>
    <span>Generation: {generation}</span>
    <button onClick={onNextGen}>Next Gen</button>
  </StyledRoot>
);

export default Controls;
