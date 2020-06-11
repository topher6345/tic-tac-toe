import React, { Component } from "react";
import "./App.css";

const winner = (board) => {
  if (board[0] === board[1] && board[1] === board[2] && board[2] !== "")
    return board[0];
  if (board[3] === board[4] && board[4] === board[5] && board[5] !== "")
    return board[3];
  if (board[6] === board[7] && board[7] === board[8] && board[8] !== "")
    return board[6];
  if (board[0] === board[3] && board[3] === board[6] && board[6] !== "")
    return board[0];
  if (board[1] === board[4] && board[4] === board[7] && board[7] !== "")
    return board[1];
  if (board[2] === board[5] && board[5] === board[8] && board[8] !== "")
    return board[2];
  if (board[0] === board[4] && board[4] === board[8] && board[8] !== "")
    return board[0];
  if (board[6] === board[4] && board[4] === board[2] && board[2] !== "")
    return board[6];

  const length = board.reduce((m, e) => (e === "" ? m + 1 : m), 0);
  if (length === 0) return "Draw";

  return false;
};

const INIT_BOARD = ["", "", "", "", "", "", "", "", ""];
const X = "❌";
const O = "⭕️";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array.from(INIT_BOARD),
      over: false,
      strategy: "random",
    };
  }

  strategy(indicies) {
    if (this.state.strategy === "random")
      return indicies[Math.floor(Math.random() * indicies.length)];
    if (this.state.strategy === "first") return indicies[0];
    if (this.state.strategy === "last") return indicies[indicies.length - 1];
  }

  play = (index) => () => {
    if (this.state.over) return;

    const board = Array.from(this.state.board);
    const indicies = [];
    board[index] = X;

    if (winner(board)) return this.setState({ board, over: true });

    board.forEach((e, i) => e === "" && indicies.push(i));
    board[this.strategy(indicies)] = O;
    this.setState({ board, over: winner(board) });
  };

  makeRow = (row) =>
    row.map((index) => {
      const message = this.state.board[index];
      if (message === "")
        return <SquareInit onClick={this.play(index)} index={index} />;
      if (message === X) return <Square index={index}>{X}</Square>;
      if (message === O) return <Square index={index}>{O}</Square>;
    });

  updateStrategy = (event) => this.setState({ strategy: event.target.value });

  reset = () => this.setState({ board: Array.from(INIT_BOARD) });

  render() {
    return (
      <>
        <h1>TicTacToe</h1>
        <table>
          <tbody>
            {[
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
            ].map((row) => (
              <tr>{this.makeRow(row)}</tr>
            ))}
          </tbody>
        </table>
        <p>winner: {winner(this.state.board)}</p>
        <button onClick={this.reset}>Reset</button>
        <label>Strategy:</label>
        <select onChange={this.updateStrategy}>
          <option value="random">random</option>
          <option value="first">first</option>
          <option value="last">last</option>
        </select>
      </>
    );
  }
}

export default App;

const Square = ({ index, children }) => <td key={index}>{children}</td>;

const SquareInit = ({ onClick, index }) => (
  <td key={index} onClick={onClick}>
    {"_"}
  </td>
);
