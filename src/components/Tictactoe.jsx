import React, { useState } from "react";

export const Tictactoe = () => {

    const [cell , setCell] = useState(Array(9).fill(null));
    const [turn , setTurn] = useState(true);
    
    
    

    const checkWinner = (cells) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (
            cells[a] &&
            cells[a] === cells[b] &&
            cells[a] === cells[c]
          ) {
            return cells[a];
          }
        }
        return null;
        }
    const winner = checkWinner(cell);
    const isDraw = !winner && cell.every(Boolean);
    let player = winner ? `Winner: ${winner}` : isDraw ? "Draw!" : `Now turn: ${turn ? "x" : "o"}`;

    const handelReset = () => {
        setCell(Array(9).fill(null));
        setTurn(true);
    }

    const handelBlock = (index)=>{

        if(cell[index] || winner) {
            return;
        }
        
        const copyCell = [...cell];
        copyCell[index] = turn ? "x" : "o";
        setCell(copyCell);
        setTurn(!turn);
    }
  return (
    <div className="grid place-items-center h-screen    ">

      <div className=" text-center ">
        {/* title */}
        <h1 className="text-4xl font-bold   ">Tic Tac Toe Game</h1>

        <h4 className=" font-semibold    ">{player}</h4>

        <div className="grid grid-cols-3 gap-[2px] border mt-2 ">
            {cell.map((item , index) => <button className={` h-[50px] cursor-pointer font-bold text-2xl text-white bg-slate-400 `} onClick={()=> handelBlock(index)}    key={index} type="button">{item}</button> )}
        </div>

        <div className="text-center">
            <button type="button" onClick={handelReset} className=" mt-5 bg-red-500/10 py-1 px-5 rounded-[2px]   cursor-pointer">Reset Game</button>
        </div>
      </div>

    </div>
  );
};
