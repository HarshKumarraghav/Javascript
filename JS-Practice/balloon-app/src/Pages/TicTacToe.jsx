import React, { useEffect, useState } from "react";
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
  const [gameOver, setGameOver] = useState(false);
  const [isXplaying, setIsXplaying] = useState(true);
  const [score, setScore] = useState({
    xScore: 0,
    oScore: 0,
  });
  const BoxClickHandler = (boxId) => {
    const BoardInPlay = board.map((item, i) => {
      if (boxId === i) {
        return isXplaying ? "X" : "O";
      } else {
        return item;
      }
    });
    const Winner = WinnerHandler(BoardInPlay);
    if (Winner) {
      if (Winner === "X") {
        setScore({
          ...score,
          xScore: score.xScore + 1,
        });
      } else {
        setScore({
          ...score,
          oScore: score.oScore + 1,
        });
      }
    }
    setBoard(BoardInPlay);
    setIsXplaying(!isXplaying);
  };
  const WinnerHandler = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };
  const GameOverHandler = () => {
    if (gameOver === true) {
      setBoard(Array(9).fill(null));
    }
    setGameOver(false);
  };

  useEffect(() => GameOverHandler(), [gameOver]);
  return (
    <div className="w-screen h-screen flex justify-between items-center flex-col py-20">
      <div className="w-96 h-16 rounded-xl shadow-xl border flex">
        <div
          className={`w-1/2 h-full border-r flex justify-center items-center font-bold text-2xl gap-2 ${
            isXplaying ? "border-b-4 border-b-red-500" : ""
          }`}
        >
          <span className="text-red-500 ">Player X: </span> {"  "}{" "}
          {score.xScore}
        </div>
        <div
          className={`w-1/2 h-full border-r flex justify-center items-center font-bold text-2xl gap-2 ${
            isXplaying ? "" : "border-b-4 border-b-blue-500"
          }`}
        >
          <span className=" text-blue-500 ">Player X: </span> {"  "}{" "}
          {score.oScore}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {board.map((val, i) => (
          <button
            key={i}
            onClick={() => val === null && BoxClickHandler(i)}
            className={`w-20 h-20 rounded shadow-lg border text-xl font-bold ${
              val === "X"
                ? "border-red-500 text-red-500"
                : val === "O"
                ? "border-blue-500 text-blue-500"
                : ""
            }`}
          >
            {val}
          </button>
        ))}
      </div>
      <button
        className="px-4 py-2 bg-black text-white rounded-md shadow-md"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Reset Board
      </button>
    </div>
  );
};

export default TicTacToe;
