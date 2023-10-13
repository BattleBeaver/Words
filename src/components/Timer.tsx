import { useEffect, useState } from "react";
import getTimeString from "../utils/convertTime";

type TimerProps = {
  isGameStarted: boolean;
  isGameEnded: boolean;
  setWinnerTime: (time: number) => void;
};

const Timer = ({ isGameStarted, isGameEnded, setWinnerTime }: TimerProps) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: number | null = null;
    if (isGameEnded) {
      setWinnerTime(time);
    }
    if (!isGameStarted) {
      setTime(0);
    } else {
      interval = setInterval(() => {
        setTime(time + 100);
      }, 100);
    }
    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isGameStarted, time, isGameEnded, setWinnerTime]);

  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">Time spent</div>
        <div className="stat-value">{getTimeString(time)}</div>
      </div>
    </div>
  );
};

export default Timer;
