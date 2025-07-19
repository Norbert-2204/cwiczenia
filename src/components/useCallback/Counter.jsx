import { useEffect, useState } from "react";

const Counter = ({ resetTime, num, rerender }) => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleCounter = () => {
    setCounter((prev) => prev + num);
  };

  useEffect(() => {
    rerender();
    setIsActive(true);
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [rerender]);

  useEffect(() => {
    setCounter(0);
  }, [resetTime]);

  return (
    <div className="flex flex-col gap-5">
      <button
        className={`w-20 h-10 rounded-xs ${
          isActive ? "bg-red-700" : "bg-green-600"
        }`}
        onClick={handleCounter}
      >
        +{num}
      </button>
      <h2
        className={`p-2 rounded ${
          counter <= 5
            ? "bg-green-600"
            : counter > 5 && counter <= 12
            ? "bg-green-900"
            : counter > 12
            ? "bg-purple-700"
            : ""
        }`}
      >
        {counter}
      </h2>
    </div>
  );
};
export default Counter;
