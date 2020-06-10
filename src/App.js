import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const winner = (board) => {
  if (board[0] === board[1] && board[1] === board[2] && board[2] !== "") {
    return board[0];
  }

  if (board[3] === board[4] && board[4] === board[5] && board[5] !== "") {
    return board[3];
  }

  if (board[6] === board[7] && board[7] === board[8] && board[8] !== "") {
    return board[6];
  }

  if (board[0] === board[3] && board[3] === board[6] && board[6] !== "") {
    return board[0];
  }

  if (board[1] === board[4] && board[4] === board[7] && board[7] !== "") {
    return board[1];
  }

  if (board[2] === board[5] && board[5] === board[8] && board[8] !== "") {
    return board[2];
  }

  if (board[0] === board[4] && board[4] === board[8] && board[8] !== "") {
    return board[0];
  }

  if (board[6] === board[4] && board[4] === board[2] && board[2] !== "") {
    return board[6];
  }

  const indicies = [];
  board.forEach((e, i) => e === "" && indicies.push(i));

  if (indicies.length === 0) {
    return "draw";
  }

  return "";
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
      editing: false,
    };
  }

  randomStrategy(indicies) {
    return indicies[Math.floor(Math.random() * indicies.length)];
  }

  makeRow = (row) =>
    row.map((index) => {
      const message = this.state.board[index];

      if (message === "") {
        return (
          <SquareInit
            onClick={() => {
              const board = this.state.board;
              const indicies = [];
              board[index] = "X";
              this.state.board.forEach((e, i) => e === "" && indicies.push(i));
              board[this.randomStrategy(indicies)] = "O";
              this.setState({
                board: board,
              });
            }}
            index={index}
          />
        );
      } else if (message === "X") {
        return <Square index={index}>X</Square>;
      } else if (message === "O") {
        return <Square index={index}>O</Square>;
      }
    });

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default App;

function Square({ index, children }) {
  return (
    <td
      style={{
        backgroundColor: "red",
        maxWidth: "20px",
        minWidth: "1em",
      }}
      key={index}
    >
      {children}
    </td>
  );
}

function SquareInit({ onClick, index }) {
  return (
    <td
      style={{
        backgroundColor: "red",
        maxWidth: "20px",
        minWidth: "1em",
      }}
      key={index}
      onClick={onClick}
    >
      {"_"}
    </td>
  );
}
