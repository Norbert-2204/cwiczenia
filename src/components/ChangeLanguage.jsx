import { useState } from "react";
import Greeting from "./Greeting.jsx";

const SwitchLanguage = () => {
  const [language, setLanguage] = useState("pl");
  const languageHandler = (lang) => {
    if (lang !== language) {
      setLanguage(lang);
    }
  };
  const message = {
    pl: "Witaj użytkowniku!",
    gb: "Welcome user!",
  };
  return (
    <div>
      <div>
        <button onClick={() => languageHandler("pl")}>PL</button>
        <button onClick={() => languageHandler("gb")}>GB</button>
      </div>
      <Greeting>{message[language]}</Greeting>
    </div>
  );
};
export default SwitchLanguage;
