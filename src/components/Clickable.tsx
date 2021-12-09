import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<ButtonProps>`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  outline: 0;
  cursor: pointer;
`;

const Clickable: React.FC<ButtonProps> = ({ children, onClick }) => (
  <StyledButton data-testid="clickable" type="button" onClick={onClick}>
    {children}
  </StyledButton>
);

export default Clickable;
