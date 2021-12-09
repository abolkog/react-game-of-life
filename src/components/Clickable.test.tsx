import { screen, render } from '@testing-library/react';
import Clickable from './Clickable';

describe('<Clickable />  Tests', () => {
  it('should render a button to the screen', () => {
    const props = { onClick: jest.fn() };
    render(
      <Clickable {...props}>
        <div />
      </Clickable>
    );
    const buttonElement = screen.getByTestId('clickable');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.children.length).toBe(1);
  });
});
