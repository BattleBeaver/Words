import getTimeString from "../utils/convertTime";
type Results = {
  winnerTime: number;
};

const Results = ({ winnerTime }: Results) => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">
          <h3 className="text-red-600 text-lg">Your Time is:</h3>
        </div>
        <div className="stat-value text-red-600 animate-bounce">
          {getTimeString(winnerTime)}
        </div>
      </div>
    </div>
  );
};

export default Results;
