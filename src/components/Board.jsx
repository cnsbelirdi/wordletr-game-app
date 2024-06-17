const Board = ({ guesses, currentGuess, getGuessStatus }) => {
  return (
    <div className="board">
      {guesses.map((guess, i) => {
        const status = getGuessStatus(guess);
        return (
          <div key={i} className="row">
            {guess.split("").map((letter, j) => (
              <div key={j} className={`cell ${status[j]}`}>
                {letter}
              </div>
            ))}
          </div>
        );
      })}
      {guesses.length < 6 && (
        <div className="row">
          {currentGuess.split("").map((letter, j) => (
            <div key={j} className="cell">
              {letter}
            </div>
          ))}
          {[...Array(5 - currentGuess.length)].map((_, j) => (
            <div key={j + currentGuess.length} className="cell"></div>
          ))}
        </div>
      )}
      {guesses.length < 6 &&
        [...Array(6 - guesses.length - 1)].map((_, i) => (
          <div key={i + guesses.length} className="row">
            {[...Array(5)].map((_, j) => (
              <div key={j} className="cell"></div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Board;
