# Tic Tac Toe

Play Tic-tac-toe in your browser.

I wrote this to learn [React Hooks](https://reactjs.org/docs/hooks-intro.html)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- 4 difficulty modes HARD to EASY
- Game history with win percentage
- Sounds

### Difficulty Modes

HARD will try to block your wins the best it can and seize the center piece on first turn if available.

MEDIUM will play the HARD strategy 67% of the time and the last 33% will choose a random piece (simulating a careless player)

EASY #1 will predictably choose the first available square starting from the top left and going down by row

EASY #2 will predictably choose the first available square starting from the bottom right and going up by row

### Game History

Records the winner of the game, what strategy you played against, and the rolling win percentage.

### Sounds

There are 6 sounds in the game for the following events:

- Hover - A recording of me clicking two drum sticks
- Play - Made with [csound](https://github.com/csound/csound)
- New Game - Made with [csound](https://github.com/csound/csound)
- Lose - Made with [csound](https://github.com/csound/csound)
- Draw - Made with [csound](https://github.com/csound/csound)
- Win - Made with [csound](https://github.com/csound/csound) using [Scannd Synthesis](https://en.wikipedia.org/wiki/Scanned_synthesis)

## Project structure

Everything is one file App.js and duplication is tolerated.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## `yarn deploy`

Deploys the app using (gh-pages)[https://github.com/tschaub/gh-pages]

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
