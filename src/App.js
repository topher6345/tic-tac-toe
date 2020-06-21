import React, { useState } from "react";
import "./App.css";

const X = "❌";
const O = "⭕️";
const Empty = "";

const FLASH = {
  [X]: "🏆You Won!🏆",
  [O]: "😭You Lost!😭",
  Draw: "🤷‍♀️Draw🤷‍♀️",
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

// [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
// ]

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

// String -> Array -> Number
const playStrategy = (strategy, board) => {
  const candidates = indexsOf(board, Empty);
  const length = candidates.length;

  if (strategy === "random") {
    return candidates[Math.floor(Math.random() * length)];
  } else if (strategy === "first") {
    return candidates[0];
  } else if (strategy === "last") {
    return candidates[length - 1];
  } else if (strategy === "block") {
    const index = blockStrategy(board);
    if (index === false) {
      return candidates[Math.floor(Math.random() * length)];
    } else {
      return index;
    }
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

const App = () => {
  const [board, setBoard] = useState(Array.from(initalBoard));
  const [over, setOver] = useState(false);
  const [strategy, setStrategy] = useState("block");
  const [history, setHistory] = useState([]);
  const winner = detectWinner(board);

  const onPlay = (index) => () => {
    if (over) return;
    const newBoard = Array.from(board);
    newBoard[index] = X;
    const winner = detectWinner(newBoard);
    setOver(winner);
    if (!winner) newBoard[playStrategy(strategy, newBoard)] = O;
    setBoard(newBoard);
  };

  const updateStrategy = (e) => setStrategy(e.target.value);

  const resetGame = () => {
    if (winner)
      setHistory((oldHistory) => [{ winner, strategy }, ...oldHistory]);
    setStrategy(strategy);
    setBoard(Array.from(initalBoard));
    setOver(false);
  };

  const makeTd = (index) => {
    const message = board[index];
    if (message === "")
      return (
        <td onClick={onPlay(index)} key={index}>
          {" "}
          &nbsp;{" "}
        </td>
      );
    if (message === X) return <td key={index}>{X}</td>;
    if (message === O) return <td key={index}>{O}</td>;
  };

  const rows = () =>
    BOARD.map((row, index) => <tr key={index}>{row.map(makeTd)}</tr>);

  return (
    <>
      {winner === X && <WinModal onClick={resetGame} />}
      {winner === O && <LoseModal onClick={resetGame} />}
      {winner === "Draw" && <DrawModal onClick={resetGame} />}
      <h1>Tic • Tac • Toe</h1>
      <table>
        <tbody>{rows()}</tbody>
      </table>
      <div>
        <p>
          <button onClick={resetGame}>Reset</button>
        </p>
        <p>
          <label htmlFor="strategy">Strategy</label>
        </p>
        <p>
          <select name="strategy" onChange={updateStrategy}>
            <option value="block">Block</option>
            <option value="random">RANDOM</option>
            <option value="first">FIRST</option>
            <option value="last">LAST</option>
          </select>
        </p>
        <p>History</p>
        <div>
          <ol reversed>
            <HistoryList history={history} />
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

const HistoryList = (props) =>
  props.history.map(({ winner, strategy }, index) => (
    <li key={index + winner}>
      {FLASH[winner]} strategy: {strategy}
    </li>
  ));

const DrawModal = (props) => (
  <div className="draw-modal">
    <h2>{FLASH["Draw"]}</h2>
    <button {...props}>Play Again</button>
  </div>
);
const LoseModal = (props) => (
  <div className="lose-modal">
    <h2>{FLASH[O]}</h2>
    <button {...props}>Play Again</button>
  </div>
);

const WinModal = (props) => (
  <div className="win-modal">
    <h2>{FLASH[X]}</h2>
    <button {...props}>Play Again</button>
  </div>
);
