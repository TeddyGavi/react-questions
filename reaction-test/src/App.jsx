import { useState } from "react";
import "./App.css";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [squareColor, setSquareColor] = useState("red");
  const [reactionTime, setReactionTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const resetGame = () => {
    setGameStart(false);
    setSquareColor("red");
    setElapsedTime(0);
    setReactionTime(0);
  };

  const calculateReactionTime = (clickTime) => {
    const timeElapsedUntilClicked = clickTime - reactionTime;
    setElapsedTime(timeElapsedUntilClicked.toFixed(0));
  };

  const colorChangeTimer = () => {
    // random time between 1 and 6 ms
    const random = (Math.random() * (6 - 1 + 1) + 1).toPrecision(5);
    setTimeout(() => {
      setSquareColor("green");
      setReactionTime(new Date());
    }, random * 1000);
  };

  return (
    <div className="game-container">
      <p className="title">Click when the color changes...</p>
      {!gameStart ? (
        <button
          onClick={() => {
            setGameStart(true), colorChangeTimer();
          }}
          className="start-game"
        >
          Start Game!
        </button>
      ) : (
        <div
          onClick={() => {
            if (squareColor === "green" && elapsedTime === 0) {
              calculateReactionTime(new Date());
            }
          }}
          className="reaction-square"
          style={{ background: squareColor }}
        ></div>
      )}
      {elapsedTime && (
        <>
          <p className="title">Your reaction time was ... {elapsedTime}</p>
          <div className="reset">
            Reset...?
            <button className="start-game" onClick={() => resetGame()}>
              Reset Game
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
