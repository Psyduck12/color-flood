import React, { Component } from "react";
import Board from "../../components/Board/Board";
import Controls from "../../components/Controls//Controls";
import Scorebox from "../../components/Scorebox/Scorebox";

import classes from "./App.module.css";

class App extends Component {
  state = {
    board: [],
    count: 0,
    win: false
  };

  newGame = () => {
    const initialBoard = [...this.state.board];
    start(initialBoard);
    this.setState({
      board: initialBoard,
      count: 0,
      win: false
    });
  };

  componentDidMount() {
    this.newGame();
  }

  componentDidUpdate() {
    if (checkWin(this.state.board)) {
      if (!this.state.win) {
        this.setState({
          win: true
        });
      }
    }
  }

  newGameHandler = () => {
    this.newGame();
  };

  clickHandler = color => {
    if (!this.state.win && this.state.board[0][0] !== color) {
      const updatedBoard = [...this.state.board];
      checkBoard(updatedBoard, 0, 0, updatedBoard[0][0], color);
      this.setState({
        board: updatedBoard,
        count: this.state.count + 1
      });
    }
  };

  render() {
    return (
      <div className={classes.app}>
        <div className={classes.toolbar}>
          <h1>Color Flood</h1>
          <button onClick={this.newGameHandler}>New Game</button>
          <Scorebox score={this.state.count} />
        </div>
        <Controls onClick={this.clickHandler} />
        <Board
          board={this.state.board}
          win={this.state.win}
          count={this.state.count}
        />
      </div>
    );
  }
}

const start = board => {
  for (let i = 0; i < 12; i++) {
    board[i] = [];
    for (let j = 0; j < 12; j++) {
      switch (Math.floor(Math.random() * 4) + 1) {
        case 1:
          board[i][j] = "blue";
          break;
        case 2:
          board[i][j] = "red";
          break;
        case 3:
          board[i][j] = "green";
          break;
        case 4:
          board[i][j] = "yellow";
          break;
        default:
          board[i][j] = "orange";
      }
    }
  }
};

const checkBoard = (board, row, column, currentColor, color) => {
  board[row][column] = color;
  if (row !== 11) {
    if (currentColor === board[row + 1][column]) {
      checkBoard(board, row + 1, column, currentColor, color);
    }
  }

  if (row !== 0) {
    if (currentColor === board[row - 1][column]) {
      checkBoard(board, row - 1, column, currentColor, color);
    }
  }

  if (column !== 11) {
    if (currentColor === board[row][column + 1]) {
      checkBoard(board, row, column + 1, currentColor, color);
    }
  }

  if (column !== 0) {
    if (currentColor === board[row][column - 1]) {
      checkBoard(board, row, column - 1, currentColor, color);
    }
  }
};

const checkWin = board => {
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      if (board[i][j] !== board[0][0]) return false;
    }
  }
  return true;
};

export default App;
