import { useState } from "react";
const Submit = () => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`a name was submitted: ${name}`);
    event.preventDefault();
    // preventDefault() - zapobiega by przeglądarka wywołała domyślny stan
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  );
};
export default Submit;
