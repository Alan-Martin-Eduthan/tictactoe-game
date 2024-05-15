import "./styles.scss";
import { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./winner";

function App() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares); // This line calculates the winner

  const nextPlayer = isXNext ? "X" : "O";
  // const statusMessage = winner
  //   ? `Winner is ${winner}`
  //   : `Next player is ${nextPlayer}`;

  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextPlayer}`;

  const handleSquareClick = (clickedPosition) => {
    if (squares[clickedPosition]) {
      return;
    }

    setSquare((currentSquares) => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? "X" : "O";
        }
        return squareValue;
      });
    });
    setIsXNext((currentIsXNext) => !currentIsXNext);
  };

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
