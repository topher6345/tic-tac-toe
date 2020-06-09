import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // prettier-ignore
      board: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ]
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        {[
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
        ].map((row) => {
          return row.map((index) => {
            const message = this.state.board[index];

            if (message === "") {
              return (
                <td
                  style={{
                    backgroundColor: "red",
                    maxWidth: "20px",
                  }}
                  onClick={() => {
                    this.setState((state) => {
                      state.board[index] = "X";
                      return { board: state.board };
                    });
                  }}
                  key={index}
                >
                  {index}
                </td>
              );
            } else if (this.state.board[index] === "X") {
              return (
                <td
                  style={{
                    backgroundColor: "red",
                    maxWidth: "20px",
                  }}
                  onClick={() => {
                    this.setState((state) => {
                      state.board[index] = "";
                      return { board: state.board };
                    });
                  }}
                  key={index + "X"}
                >
                  {"X"}
                </td>
              );
            }
          });
        })}
      </div>
    );
  }
}

export default App;
