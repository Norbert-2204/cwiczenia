import { useState, useMemo } from "react";

const SlowFunction = (num) => {
  console.log("Obliczanie silni...");
  let result = 1;
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < 100; j++) {
      console.log(result);
    }
    result *= i;
  }
  return result;
};

export const ExpensiveCalculation = () => {
  const [number, setNumber] = useState(0);
  const [clicks, setClicks] = useState(0);

  const result = useMemo(() => SlowFunction(number), [number]);

  return (
    <div>
      <h2>Kosztowne obliczenia</h2>

      <label>
        Podaj liczbę:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </label>

      <p>Wynik silni: {result}</p>

      <button onClick={() => setClicks((prev) => prev + 1)}>
        Kliknięcia: {clicks}
      </button>
    </div>
  );
};
