import { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    onAdd(inputValue ? inputValue : "");
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Wpisz zadanie..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Dodaj</button>
    </div>
  );
};

export default TodoInput;
