"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Pdfviewer from "./Pdfviewer";

export default function Tictactoe({onwin}) {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] !== "" || winner || !isXNext) return;
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsXNext(false);
    checkWinner(newBoard);
  };

  useEffect(() => {
    if(winner){
      if(winner === "X"){
        onwin();
      }
      return;
    }
    if (!isXNext && !winner) {
      const timer = setTimeout(() => {
        computerMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isXNext, winner]);

  const calculateWinner = (board) => {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of patterns) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const checkWinner = (newBoard) => {
    const win = calculateWinner(newBoard);
    if (win) return setWinner(win);
    if (newBoard.every((cell) => cell !== "")) setWinner("Draw");
  };

  const computerMove = () => {
    const empty = board
      .map((c, i) => (c === "" ? i : null))
      .filter((i) => i !== null);
    const newBoard = [...board];

    for (let i of empty) {
      newBoard[i] = "O";
      if (calculateWinner(newBoard) === "O") {
        setBoard(newBoard);
        setIsXNext(true);
        checkWinner(newBoard);
        return;
      }
      newBoard[i] = "";
    }

    for (let i of empty) {
      newBoard[i] = "X";
      if (calculateWinner(newBoard) === "X") {
        newBoard[i] = "O";
        setBoard(newBoard);
        setIsXNext(true);
        checkWinner(newBoard);
        return;
      }
      newBoard[i] = "";
    }

    const random = empty[Math.floor(Math.random() * empty.length)];
    newBoard[random] = "O";
    setBoard(newBoard);
    setIsXNext(true);
    checkWinner(newBoard);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col text-center items-cente drop-shadow-2xl drop-shadow-amber-50 justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
      >
        <p className="text-2xl font-bold border-2 mb-1 text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 to-red-800 drop-shadow-amber-50 drop-shadow">
          Download CV
        </p>
        <p className="text-sm font-bold text-slate-600 drop-shadow-amber-50 drop-shadow mb-4">
          Beat Tictactoe bot to download CV
        </p>

        <div className="grid grid-cols-3 gap-4">
          {board.map((cell, index) => (
            <motion.div
              key={index}
              onClick={() => handleClick(index)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white/10 text-white border border-white/20 shadow-inner backdrop-blur-sm rounded-xl w-20 h-20 flex items-center justify-center text-4xl font-bold cursor-pointer transition-all duration-300 hover:shadow-glow"
            >
              {cell}
            </motion.div>
          ))}
        </div>

        {winner && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center text-lg text-white space-y-3"
          >
            <div className="flex gap-4 justify-center items-center text-center">
              <p className="text">
                {winner === "Draw"
                  ? "It's a Draw!"
                  : winner === "O"
                  ? "You lose"
                  : "You Won"}
              </p>

              <button
                onClick={resetGame}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Restart
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
          </div>
  );
}
