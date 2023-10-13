import { KeyboardEvent, useEffect, useState } from "react";

type GameProps = {
  wordsArray: string[];
  isGameStarted: boolean;
  setIsGameEnded: (val: boolean) => void;
  lang: string;
};

const Game = ({
  wordsArray,
  isGameStarted,
  setIsGameEnded,
  lang,
}: GameProps) => {
  const regex = lang === "en" ? /^[a-z]$/ : /^[а-щьюяґєії]$/;
  const [typed, setTyped] = useState("");
  useEffect(() => {
    setTyped("");
  }, [wordsArray]);

  useEffect(() => {
    if (typed === wordsArray.join(" ")) {
      setIsGameEnded(true);
    }
  });

  const onUserInput = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    if (
      (regex.test(key) || key === " ") &&
      typed.length + 1 <= wordsArray.join(" ").length
    ) {
      setTyped(typed + key);
    }
    if (key === "backspace") {
      setTyped(typed.slice(0, typed.length - 1));
    }
  };

  return (
    <div className="flex overflow-x-hidden w-10/12 flex-wrap p-4 bg-white rounded">
      {wordsArray
        .join(" ")
        .toLowerCase()
        .split("")
        .map((key, keyIdx) => {
          return (
            <span
              style={{
                padding: "1px",
                paddingRight: key === " " ? "3px" : 0,
                color: "black",
                background:
                  typed.length - 1 < keyIdx
                    ? "white"
                    : typed[keyIdx] === key
                    ? "green"
                    : "red",
              }}
              key={keyIdx}
            >
              {key}
            </span>
          );
        })}
      {isGameStarted && (
        <textarea
          onKeyDown={onUserInput}
          style={{ width: 0, height: 0 }}
          autoFocus
        ></textarea>
      )}
    </div>
  );
};

export default Game;
