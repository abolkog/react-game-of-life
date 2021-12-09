import 'jest-styled-components';
import { render } from '@testing-library/react';
import Controls from './Controls';

const onClickMock = jest.fn();

describe('<Controls/> Tests', () => {
  it('should render Controls component to the screen', () => {
    const generation = 10;
    const { container } = render(
      <Controls
        onReset={onClickMock}
        onNextGen={onClickMock}
        generation={generation}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin: 15px 0px;
      }

      .c0 > * {
        margin-left: 10px;
      }

      <div>
        <div
          class="c0"
        >
          <button>
            Reset
          </button>
          <span>
            Generation: 
            10
          </span>
          <button>
            Next Gen
          </button>
        </div>
      </div>
    `);
  });
});
