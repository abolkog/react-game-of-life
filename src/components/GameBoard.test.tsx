import 'jest-styled-components';
import { render } from '@testing-library/react';
import GameBoard from './GameBoard';

const boardSize = 2;

const mockBoard = Array(boardSize)
  .fill(null)
  .map(() =>
    Array(boardSize)
      .fill(null)
      .map(() => 0)
  );

describe('<GameBoard/> Tests', () => {
  it('should render grid with correct cell number', () => {
    const { container } = render(
      <GameBoard board={mockBoard} onCellClick={jest.fn()} />
    );
    const grid = container.firstChild;
    expect(grid?.childNodes.length).toBe(boardSize * boardSize);
  });
});
