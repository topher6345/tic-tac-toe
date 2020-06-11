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
      winner: false,
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
        return (
          <td onClick={this.play(index)} index={index}>
            &nbsp;
          </td>
        );
      if (message === X) return <td key={index}>{X}</td>;
      if (message === O) return <td key={index}>{O}</td>;
    });

  updateStrategy = (event) => this.setState({ strategy: event.target.value });

  reset = () => this.setState({ board: Array.from(INIT_BOARD), over: false });

  render() {
    return (
      <>
        {winner(this.state.board) === X && <WinModal onClick={this.reset} />}
        {winner(this.state.board) === O && <LoseModal onClick={this.reset} />}
        {winner(this.state.board) === "Draw" && (
          <DrawModal onClick={this.reset} />
        )}
        <h1>Tic • Tac • Toe</h1>
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
        <div>
          <p>
            <button onClick={this.reset}>Reset</button>
          </p>
          <p>
            <label for="strategy">Strategy</label>
          </p>
          <p>
            <select name="strategy" onChange={this.updateStrategy}>
              <option value="random">RANDOM</option>
              <option value="first">FIRST</option>
              <option value="last">LAST</option>
            </select>
          </p>
        </div>
      </>
    );
  }
}

export default App;

const DrawModal = (props) => (
  <div class="lose-modal">
    <h2>😭You Lost!😭</h2>
    <button {...props}>Play Again</button>
  </div>
);
const LoseModal = (props) => (
  <div class="lose-modal">
    <h2>😭You Lost!😭</h2>
    <button {...props}>Play Again</button>
  </div>
);

const WinModal = (props) => (
  <div class="win-modal">
    <h2>🏆You Won!🏆</h2>
    <button {...props}>Play Again</button>
  </div>
);
