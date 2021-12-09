# Game Of Life React

Game of life in React.js

# Running locally

- Clone the repository

```shell
git clone https://github.com/abolkog/react-game-of-life.git
```

- Install the dependencies

```shell
yarn install
```

- Run the development server

```shell
yarn start
```

Once the server is up and running, your browser should open to `http://localohst:3000`.If it did not, open your browser and navigate to [http://localohst:3000](http://localohst:3000)

# Playing the game

- You will be presented with empty board. Initial state of all cells in the board is dead (represented as 0).
- You can toggle the cell state by clicking on it. Click on cells to set the initial configuration
- Once you are happy with your setup, click the on the `Next Gen` to trigger the next generation
- Current generation is indicated by the `Generation` label. Initial value is Generation 0

## Rules

- When the next generation is running:
  - A Cell with fewer than two live neighbours dies of under-population.
  - A Cell with 2 or 3 live neighbours lives on to the next generation.
  - A Cell with more than 3 live neighbours dies of overcrowding.
  - An empty Cell with exactly 3 live neighbours "comes to life".
  - A Cell who "comes to life" outside the board should wrap at the other side of the board.
- Once the next generation is done, User can trigger "next generation" again.

# Chaning the board size

By default the board size is 10 \* 10. If you want to change the board size , edit [utils/index.ts](./src/utils/index.ts) file and adjust the `NUM_COLS` and `NUM_ROWS` values. Example:

```javascript
export const NUM_COLS = 6;
export const NUM_ROWS = 6;
```
