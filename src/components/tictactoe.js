"use client";
import { useState, useEffect } from "react";

export default function Tictactoe() {
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
        if (!isXNext && !winner) {
            const timer = setTimeout(() => {
                computerMove();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isXNext, winner]);

    const calculateWinner = (board) => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const checkWinner = (board) => {
        const win = calculateWinner(board);
        if (win) {
            setWinner(win);
            return;
        }
        if (board.every(cell => cell !== "")) {
            setWinner("Draw");
        }
    };

    const computerMove = () => {
        const emptyIndices = board
            .map((cell, index) => (cell === "" ? index : null))
            .filter((index) => index !== null);

        if (emptyIndices.length === 0) return;

        const newBoard = [...board];

        // First, try to win
        for (let index of emptyIndices) {
            newBoard[index] = "O";
            if (calculateWinner(newBoard) === "O") {
                setBoard(newBoard);
                setIsXNext(true);
                checkWinner(newBoard);
                return;
            }
            newBoard[index] = "";
        }

        // Second, try to block player from winning
        for (let index of emptyIndices) {
            newBoard[index] = "X";
            if (calculateWinner(newBoard) === "X") {
                newBoard[index] = "O"; // block it
                setBoard(newBoard);
                setIsXNext(true);
                checkWinner(newBoard);
                return;
            }
            newBoard[index] = "";
        }

        // Otherwise, random move
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        newBoard[randomIndex] = "O";
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
  <div className="flex flex-col items-center justify-center bg-amber-800/20 mt-2.5 rounded-2xl">
    <h1 className="text-3xl font-bold mb-2 mt-2">Play - TicTacToe</h1>
    <p>Beat the bot to download the CV</p>

    <div className="grid grid-cols-3 gap-4 p-4">
      {board.map((cell, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className="bg-slate-700 p-4 rounded shadow-md hover:shadow-lg transition duration-300 cursor-pointer flex items-center justify-center text-4xl font-bold min-w-[80px] min-h-[80px]"
        >
          {cell}
        </div>
      ))}
    </div>

    {winner && (
      <div className="m-3 text-2xl font-semibold flex flex-col items-center gap-4">
        {winner === "Draw" ? "It's a Draw!" : (winner === "O" ? "You lost" : "You Won!")}

        <div className="flex gap-4">
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Restart
          </button>

          {winner === "X" && (
            <a
              href="/cv.pdf"    
              download
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
            >
              Download CV
            </a>
          )}
        </div>
      </div>
    )}
  </div>
);
 
}
