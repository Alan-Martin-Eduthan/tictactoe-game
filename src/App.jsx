import "./styles.scss";
import { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./winner";
import StatusMessage from "./components/StatusMessage";

function App() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares); // This line calculates the winner

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
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
