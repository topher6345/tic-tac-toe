import React, { useState } from "react";
import "./App.css";

const indexsOf = (array, target) =>
  array.reduce((m, e, i) => (e === target ? m.concat(i) : m), []);

const count = (array, target) =>
  array.reduce((m, e) => (e === target ? m + 1 : m), 0);

const detectWinner = (array) => {
  if (array[0] === array[1] && array[1] === array[2] && array[2] !== "")
    return array[0];
  if (array[3] === array[4] && array[4] === array[5] && array[5] !== "")
    return array[3];
  if (array[6] === array[7] && array[7] === array[8] && array[8] !== "")
    return array[6];
  if (array[0] === array[3] && array[3] === array[6] && array[6] !== "")
    return array[0];
  if (array[1] === array[4] && array[4] === array[7] && array[7] !== "")
    return array[1];
  if (array[2] === array[5] && array[5] === array[8] && array[8] !== "")
    return array[2];
  if (array[0] === array[4] && array[4] === array[8] && array[8] !== "")
    return array[0];
  if (array[6] === array[4] && array[4] === array[2] && array[2] !== "")
    return array[6];

  if (count(array, "") === 0) return "Draw";

  return false;
};

const playStrategy = (strategy, board) => {
  const candidates = indexsOf(board, "");
  const length = candidates.length;

  if (strategy === "random") {
    return candidates[Math.floor(Math.random() * length)];
  } else if (strategy === "first") {
    return candidates[0];
  } else if (strategy === "last") {
    return candidates[length - 1];
  }
};

const initalBoard = ["", "", "", "", "", "", "", "", ""];
const initalState = {
  board: Array.from(initalBoard),
  over: false,
  strategy: "random",
};
const X = "❌";
const O = "⭕️";

const App = () => {
  const [state, setState] = useState(initalState);

  const onPlay = (index) => () => {
    setState((oldState) => {
      if (oldState.over) return oldState;
      const board = Array.from(oldState.board);
      board[index] = X;
      const winner = detectWinner(board);
      if (!winner) board[playStrategy(state.strategy, board)] = O;
      return { ...oldState, board, over: winner };
    });
  };

  const makeTd = (index) => {
    const message = state.board[index];
    if (message === "")
      return (
        <td onClick={onPlay(index)} index={index}>
          &nbsp;
        </td>
      );
    if (message === X) return <td key={index}>{X}</td>;
    if (message === O) return <td key={index}>{O}</td>;
  };

  const updateStrategy = (event) => setState({ strategy: event.target.value });

  const resetGame = () =>
    setState((oldState) => ({ ...initalState, strategy: oldState.strategy }));

  const winner = detectWinner(state.board);

  return (
    <>
      {winner === X && <WinModal onClick={resetGame} />}
      {winner === O && <LoseModal onClick={resetGame} />}
      {winner === "Draw" && <DrawModal onClick={resetGame} />}
      <h1>Tic • Tac • Toe</h1>
      <table>
        <tbody>
          {[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
          ].map((row) => (
            <tr>{row.map(makeTd)}</tr>
          ))}
        </tbody>
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
            <option value="random">RANDOM</option>
            <option value="first">FIRST</option>
            <option value="last">LAST</option>
          </select>
        </p>
      </div>
    </>
  );
};

export default App;

const DrawModal = (props) => (
  <div className="lose-modal">
    <h2>😭You Lost!😭</h2>
    <button {...props}>Play Again</button>
  </div>
);
const LoseModal = (props) => (
  <div className="lose-modal">
    <h2>😭You Lost!😭</h2>
    <button {...props}>Play Again</button>
  </div>
);

const WinModal = (props) => (
  <div className="win-modal">
    <h2>🏆You Won!🏆</h2>
    <button {...props}>Play Again</button>
  </div>
);
