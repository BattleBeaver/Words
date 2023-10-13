import { useState, useRef, useEffect } from "react";
import LanguageSelector from "./components/LanguageSelector";
import getWordsArray from "./utils/wordsArray";
import Game from "./components/Game";
import Timer from "./components/Timer";
import Results from "./components/Results";

function App() {
  const [lang, setLang] = useState<string>("en");
  const [wordsArray, setWordsArray] = useState<string[]>([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [winnerTime, setWinnerTime] = useState(0);

  const numberOfWords = useRef<HTMLInputElement>(null);

  const getWords = () => {
    setIsStarted(false);
    const selectedNumberOfWords = Math.min(
      parseInt(numberOfWords.current!.value),
      100
    );
    setWordsArray(getWordsArray(selectedNumberOfWords, lang));
  };

  const startGame = () => {
    setIsEnded(false);
    setIsStarted(true);
    setWinnerTime(0);
  };

  useEffect(() => {
    if (isEnded) {
      setIsStarted(false);
    }
  }, [isEnded]);

  return (
    <main className="flex flex-col space-y-4 justify-center items-center">
      <Game
        isGameStarted={isStarted}
        wordsArray={wordsArray}
        setIsGameEnded={setIsEnded}
        lang={lang}
      />
      <LanguageSelector setLang={setLang} />
      <input
        className="btn btn-primary"
        type="number"
        defaultValue={10}
        max="70"
        ref={numberOfWords}
      ></input>
      <div className="flex-row">
        <button className="btn mx-2 btn-primary" onClick={getWords}>
          Get Words
        </button>
        <button className="btn btn-secondary" onClick={startGame}>
          Start Game!
        </button>
      </div>
      {winnerTime === 0 ? (
        <Timer
          setWinnerTime={setWinnerTime}
          isGameStarted={isStarted}
          isGameEnded={isEnded}
        />
      ) : (
        <Results winnerTime={winnerTime} />
      )}
    </main>
  );
}

export default App;
