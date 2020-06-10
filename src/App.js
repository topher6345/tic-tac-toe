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

  return "";
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
    };
  }

  makeRow = (row) =>
    row.map((index) => {
      const message = this.state.board[index];
      if (message === "") {
        return (
          <SquareInit
            onClick={() => {
              this.setState((state) => {
                state.board[index] = "X";
                return {
                  board: state.board,
                };
              });
            }}
            index={index}
          />
        );
      } else if (message === "X") {
        return <SquareX index={index} />;
      }
    });

  componentDidUpdate() {
    console.log(`winner: ${winner(this.state.board)}`);
  }

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

function SquareX({ index }) {
  return (
    <td
      style={{
        backgroundColor: "red",
        maxWidth: "20px",
      }}
      key={index}
    >
      X
    </td>
  );
}

function SquareInit({ onClick, index }) {
  return (
    <td
      style={{
        backgroundColor: "red",
        maxWidth: "20px",
      }}
      key={index}
      onClick={onClick}
    >
      {"_"}
    </td>
  );
}
