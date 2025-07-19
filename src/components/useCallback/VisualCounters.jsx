import { useState, useCallback } from "react";
import Counter from "./Counter";

const VisualCounters = () => {
  const [resetTime, setResetTime] = useState(false);

  const handleReset = () => {
    setResetTime((prev) => !prev);
  };

  const handleRerender = useCallback(() => {
    console.log("rerender");
  }, []);

  // test bez useCallback

  // const handleRerender = () => {
  //   console.log("rerender");
  // };

  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <h1>Stan liczników, useCallback</h1>
      <button onClick={handleReset} className="w-20 h-10 bg-blue-600">
        Reset
      </button>
      <div className="flex gap-10">
        <Counter resetTime={resetTime} num={1} rerender={handleRerender} />
        <Counter resetTime={resetTime} num={2} rerender={handleRerender} />
        <Counter resetTime={resetTime} num={3} rerender={handleRerender} />
      </div>
    </div>
  );
};
export default VisualCounters;
