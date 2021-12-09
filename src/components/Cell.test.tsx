import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import Cell from './Cell';

const onClickMock = jest.fn();

describe('<Cell/> Tests', () => {
  it('should have aqua backgrtound when active', () => {
    render(<Cell active onClick={onClickMock} />);
    expect(screen.getByTestId('cell')).toHaveStyle({
      'background-color': '#00cccc',
    });
  });
  it('should have white background when inactive', () => {
    render(<Cell active={false} onClick={onClickMock} />);
    expect(screen.getByTestId('cell')).toHaveStyle({
      'background-color': '#fff',
    });
  });
});
