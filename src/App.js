import React, { useState, useEffect } from "react";
import "./App.css";
const selId = (id) => document.getElementById(id);

const localStorageGet = (key) => JSON.parse(window.localStorage.getItem(key));
const localStorageSet = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));
const onPlaySound = selId("onPlaySound");
const onLoseSound = selId("onLoseSound");
const onWinSound = selId("onWinSound");
const onDrawSound = selId("onDrawSound");
const onNewGameSound = selId("onNewGameSound");
const onHoverSound = selId("onHoverSound");
const X = "❌";
const O = "⭕️";
const Empty = "";

const Trophy = ({ className }) => (
  <span {...{ className }} role="img" aria-label="Trophy">
    🏆
  </span>
);

const CryingFace = ({ className }) => (
  <span {...{ className }} role="img" aria-label="Crying Face">
    😭
  </span>
);

const Shrug = ({ className }) => (
  <span {...{ className }} role="img" aria-label="Shrug">
    🤷‍♀️
  </span>
);
// used by history and view
const FLASH = {
  [X]: (
    <>
      <Trophy className="spin-left" />
      You Won!
      <Trophy className="spin-right" />
    </>
  ),
  [O]: (
    <>
      <CryingFace className="spin-left" />
      You Lost!
      <CryingFace className="spin-right" />
    </>
  ),
  Draw: (
    <>
      <Shrug /> Draw <Shrug />
    </>
  ),
};

const BOARD = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

const transpose = ([a, b, c]) => [
  [a[0], b[0], c[0]],
  [a[1], b[1], c[1]],
  [a[2], b[2], c[2]],
];

const indexsOf = (array, target) =>
  array.reduce((m, e, i) => (e === target ? m.concat(i) : m), []);

const count = (array, target) =>
  array.reduce((m, e) => (e === target ? m + 1 : m), 0);

const detectWinner = (array) => {
  const findWinner = (a, b, c) =>
    array[a] === array[b] && array[b] === array[c] && array[c] !== Empty;

  for (let i = 0; i < 3; i++) {
    if (findWinner(...BOARD[i])) return array[BOARD[i][0]];
  }

  const transposedBoard = transpose(BOARD);
  for (let i = 0; i < 3; i++) {
    if (findWinner(...transposedBoard[i])) return array[transposedBoard[i][0]];
  }

  if (findWinner(0, 4, 8)) return array[0];
  if (findWinner(6, 4, 2)) return array[6];
  if (count(array, "") === 0) return "Draw";

  return false;
};

const blockStrategy = (board) => {
  if (count(board, X) === 1 && board[4] === Empty) return 4;

  const detect = (player, a, b, empty) =>
    board[a] === player && board[b] === board[a] && board[empty] === Empty;

  if (detect(O, 3, 6, 0)) return 0;
  if (detect(O, 4, 8, 0)) return 0;
  if (detect(O, 1, 2, 0)) return 0;
  if (detect(O, 0, 2, 1)) return 1;
  if (detect(O, 4, 7, 1)) return 1;
  if (detect(O, 0, 1, 2)) return 2;
  if (detect(O, 6, 4, 2)) return 2;
  if (detect(O, 5, 8, 2)) return 2;
  if (detect(O, 0, 6, 3)) return 3;
  if (detect(O, 4, 5, 3)) return 3;
  if (detect(O, 0, 8, 4)) return 4;
  if (detect(O, 1, 7, 4)) return 4;
  if (detect(O, 6, 2, 4)) return 4;
  if (detect(O, 3, 5, 4)) return 4;
  if (detect(O, 2, 8, 5)) return 5;
  if (detect(O, 3, 4, 5)) return 5;
  if (detect(O, 0, 3, 6)) return 6;
  if (detect(O, 4, 2, 6)) return 6;
  if (detect(O, 7, 8, 6)) return 6;
  if (detect(O, 1, 4, 7)) return 7;
  if (detect(O, 6, 8, 7)) return 7;
  if (detect(O, 0, 4, 8)) return 8;
  if (detect(O, 2, 5, 8)) return 8;
  if (detect(O, 6, 7, 8)) return 8;

  if (detect(X, 3, 6, 0)) return 0;
  if (detect(X, 4, 8, 0)) return 0;
  if (detect(X, 1, 2, 0)) return 0;
  if (detect(X, 0, 2, 1)) return 1;
  if (detect(X, 4, 7, 1)) return 1;
  if (detect(X, 0, 1, 2)) return 2;
  if (detect(X, 6, 4, 2)) return 2;
  if (detect(X, 5, 8, 2)) return 2;
  if (detect(X, 0, 6, 3)) return 3;
  if (detect(X, 4, 5, 3)) return 3;
  if (detect(X, 0, 8, 4)) return 4;
  if (detect(X, 1, 7, 4)) return 4;
  if (detect(X, 6, 2, 4)) return 4;
  if (detect(X, 3, 5, 4)) return 4;
  if (detect(X, 2, 8, 5)) return 5;
  if (detect(X, 3, 4, 5)) return 5;
  if (detect(X, 0, 3, 6)) return 6;
  if (detect(X, 4, 2, 6)) return 6;
  if (detect(X, 7, 8, 6)) return 6;
  if (detect(X, 1, 4, 7)) return 7;
  if (detect(X, 6, 8, 7)) return 7;
  if (detect(X, 0, 4, 8)) return 8;
  if (detect(X, 2, 5, 8)) return 8;
  if (detect(X, 6, 7, 8)) return 8;

  return false;
};

const playStrategy = (strategy, board) => {
  const candidates = indexsOf(board, Empty);
  const length = candidates.length;

  const random = () => candidates[Math.floor(Math.random() * length)];

  const hard = () => {
    const index = blockStrategy(board);
    return index === false
      ? candidates[Math.floor(Math.random() * length)]
      : index;
  };

  if (strategy === "random") {
    return Math.floor(Math.random() * 100) > 67 ? hard() : random();
  } else if (strategy === "first") {
    return candidates[0];
  } else if (strategy === "last") {
    return candidates[length - 1];
  } else if (strategy === "hard") {
    return hard();
  }
};

const initalBoard = [
  Empty,
  Empty,
  Empty,
  Empty,
  Empty,
  Empty,
  Empty,
  Empty,
  Empty,
];

const arrayEql = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const winPercentage = (history) =>
  (
    (history.reduce(
      (previousValue, { winner }) =>
        winner === X ? previousValue + 1 : previousValue,
      0
    ) /
      history.length) *
    100
  ).toFixed(0);

const App = () => {
  const [board, setBoard] = useState(Array.from(initalBoard));
  const [gameOver, setOver] = useState(false);
  const [strategy, setStrategy] = useState("hard");
  const [history, setHistory] = useState(localStorageGet("history") || []);
  const winner = detectWinner(board);

  const onPlay = (index) => () => {
    if (gameOver) return;
    onPlaySound.play();
    const newBoard = Array.from(board);
    newBoard[index] = X;
    const winner = detectWinner(newBoard);

    setOver(winner);
    if (!winner) newBoard[playStrategy(strategy, newBoard)] = O;
    setBoard(newBoard);
  };

  const updateStrategy = (e) => setStrategy(e.target.value);

  const resetGame = () => {
    const newBoard = Array.from(initalBoard);
    if (!arrayEql(board, newBoard)) onNewGameSound.play();
    setStrategy(strategy);
    setBoard(newBoard);
    setOver(false);
  };

  const newGame = () => {
    onNewGameSound.play();
    setHistory((oldHistory) => {
      const gameHistory = [
        {
          winner,
          strategy,
          timestamp: new Date(Date.now()).toLocaleTimeString(),
          winPercentage: winPercentage([{ winner }, ...oldHistory]),
        },
        ...oldHistory,
      ];
      localStorageSet("history", gameHistory);
      return gameHistory;
    });
    resetGame();
  };

  const makeSquare = (index) => {
    const message = board[index];
    if (message === X) return <td key={index}>{X}</td>;
    if (message === O)
      return (
        <td className="fade-in" key={index}>
          {O}
        </td>
      );

    return (
      <td
        onClick={onPlay(index)}
        onMouseEnter={() => onHoverSound.play()}
        key={index}
      >
        {" "}
        &nbsp;{" "}
      </td>
    );
  };

  const clearHistory = () => {
    if (
      history.length > 0 &&
      !window.confirm(
        "Are you sure? This will delete your game history permanently."
      )
    )
      return;

    setHistory([]);
    localStorageSet("history", []);
  };

  const squares = () =>
    BOARD.map((row, index) => <tr key={index}>{row.map(makeSquare)}</tr>);

  return (
    <>
      {winner === X && <WinModal onClick={newGame} />}
      {winner === O && <LoseModal onClick={newGame} />}
      {winner === "Draw" && <DrawModal onClick={newGame} />}
      <div className="paneled">
        <h1>Tic • Tac • Toe</h1>
      </div>
      <table>
        <tbody>{squares()}</tbody>
      </table>
      <div>
        <button onMouseEnter={() => onHoverSound.play()} onClick={resetGame}>
          New Game
        </button>
        <div className="paneled">
          <label htmlFor="strategy">Difficulty</label>
        </div>
        <select name="strategy" onChange={updateStrategy}>
          <option value="hard">HARD</option>
          <option value="random">MEDIUM</option>
          <option value="first">EASY #1</option>
          <option value="last">EASY #2</option>
        </select>
        <div className="paneled">History</div>
        <button onClick={clearHistory} className="clearButton">
          Clear
        </button>
        <div className="terminal">
          <ol reversed>
            <HistoryList history={history} />
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

const HistoryList = ({ history }) =>
  history.map(({ winner, strategy, timestamp, winPercentage }, index) => (
    <li key={index + winner}>
      {timestamp} • {FLASH[winner]} • {strategy} • win percentage:{" "}
      {winPercentage}%
    </li>
  ));

const DrawModal = ({ onClick }) => {
  useEffect(() => {
    onDrawSound.play();
  });

  return (
    <div className="draw-modal">
      <h2>{FLASH["Draw"]}</h2>
      <button {...{ onClick }}>Play Again</button>
    </div>
  );
};

const LoseModal = ({ onClick }) => {
  useEffect(() => {
    onLoseSound.play();
  });

  return (
    <div className="lose-modal">
      <h2>{FLASH[O]}</h2>
      <button {...{ onClick }}>Play Again</button>
    </div>
  );
};

const WinModal = ({ onClick }) => {
  useEffect(() => {
    onWinSound.play();
  });

  return (
    <div className="win-modal">
      <h2>{FLASH[X]}</h2>
      <button {...{ onClick }}>Play Again</button>
    </div>
  );
};
