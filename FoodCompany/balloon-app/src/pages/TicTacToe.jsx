import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const WIN_CONDITIONS = [
  [0, 1, 2], // 1st row
  [3, 4, 5], // 2nd row
  [6, 7, 8], // 3rd row
  [0, 3, 6], // 1st column
  [1, 4, 7], // 2nd column
  [2, 5, 8], // 3rd column
  [0, 4, 8], // 1st diagonal
  [2, 4, 6], // 2nd diagonal
];
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXPlaying, setIsXPlaying] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState({
    oScore: 0,
    xScore: 0,
  });
  const BoardUpdateHandler = (index) => {
    const boardData = board.map((value, i) => {
      if (i === index) {
        return isXPlaying ? "X" : "O";
      } else return value;
    });
    const winner = checkWinnerHanlder(boardData);
    if (winner) {
      if (winner === "X") {
        setScore({ ...score, xScore: score.xScore + 1 });
      } else {
        setScore({ ...score, xScore: score.xScore + 1 });
      }
    }
    setBoard(boardData);
    setIsXPlaying(!isXPlaying);
  };
  const checkWinnerHanlder = (boardData) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      let [x, y, z] = WIN_CONDITIONS[i];
      if (
        boardData[x] &&
        boardData[x] === boardData[y] &&
        boardData[y] === boardData[z]
      ) {
        setGameOver(true);
        return boardData[x];
      }
    }
  };
  useEffect(() => {
    if (gameOver === true) {
      setGameOver(false);
      setBoard(Array(9).fill(null));
    }
  }, [gameOver]);
  return (
    <div className="w-screen h-screen flex flex-col justify-evenly items-center">
      <div
        className={`w-96  h-16 flex justify-between items-center bg-white rounded-2xl border-b-4 ${
          isXPlaying ? "border-red-500 " : "border-blue-500"
        }`}
      >
        <div
          className={`w-1/2 text-red-500 h-full flex items-center justify-center text-2xl font-bold border-r-4 border-black ${
            isXPlaying ? "border-red-500" : "border-blue-500"
          }`}
        >
          Total: {score.xScore}
        </div>
        <div
          className={`w-1/2 text-blue-500 h-full flex items-center justify-center text-2xl font-bold `}
        >
          Total: {score.oScore}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {board?.map((val, i) => (
          <button
            key={i}
            onClick={() => val === null && BoardUpdateHandler(i)}
            className={`w-20 h-20 rounded-2xl border bg-white text-2xl text-black font-bold flex justify-center items-center ${
              val === "O" ? "text-blue-500" : "text-red-500"
            }`}
          >
            {val}
          </button>
        ))}
      </div>
      <button
        className="bg-white text-black w-72 rounded-2xl h-10 text-xl font-bold shadow-2xl border"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Reset Board
      </button>
    </div>
  );
};

export default TicTacToe;
