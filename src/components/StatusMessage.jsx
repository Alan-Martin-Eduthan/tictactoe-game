const StatusMessage = ({ winner, isXNext, squares }) => {
  const noMovesLeft = squares.every((squareValue) => squareValue !== null);

  const nextPlayer = isXNext ? "X" : "O";

  const renderStatusMessage = () => {
    if (winner) {
      return <div>winner is {winner}</div>;
    }
    if (!winner && noMovesLeft) {
      return <div>0 and X tied</div>;
    }
    if (!winner && !noMovesLeft) {
      return <div>Next player is {nextPlayer}</div>;
    }
    return null;
  };

  return;
  <div>{renderStatusMessage}</div>;
};
export default StatusMessage;
