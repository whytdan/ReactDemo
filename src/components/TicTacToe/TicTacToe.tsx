import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [playground, setPlayground] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const [clickedAmount, setClickedAmount] = useState(0);
  const [wonIndexes, setWonIndexes] = useState<number[][]>([]);

  const checkPlayground = (newPlayground: string[][]) => {
    // 1) по горизонтали

    newPlayground.forEach((row, rowIndex) => {
      const isRowWon = row.every((cell) => cell === row[0] && cell);

      if (isRowWon) {
        const rowWonIndexes = row.map((_, cellIndex) => [rowIndex, cellIndex]);
        setWonIndexes(rowWonIndexes);
      }
    });
  };

  console.log('wonIndexes:', wonIndexes);

  const handleCellClick = (rowIndex: number, cellIndex: number) => {
    if (playground[rowIndex][cellIndex] || wonIndexes.length) {
      return;
    }

    const newClickedAmount = clickedAmount + 1;
    const sign = newClickedAmount % 2 === 0 ? 'O' : 'X';

    const newPlayground = playground.map((row, rIndex) => {
      if (rowIndex === rIndex) {
        return row.map((cell, cIndex) => (cellIndex === cIndex ? sign : cell));
      } else {
        return row;
      }
    });

    setPlayground(newPlayground);
    setClickedAmount(newClickedAmount);
    checkPlayground(newPlayground);
  };

  return (
    <div className='playground'>
      {/* row = ['X', '', ''], */}
      {playground.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className='row'>
            {row.map((cell, cellIndex) => {
              return (
                <div
                  onClick={() => handleCellClick(rowIndex, cellIndex)}
                  key={cellIndex}
                  className={`cell ${
                    JSON.stringify(wonIndexes).includes(
                      `[${rowIndex},${cellIndex}]`
                    )
                      ? 'won'
                      : ''
                  }`}
                >
                  {cell}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TicTacToe;
