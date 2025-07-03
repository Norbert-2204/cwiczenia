import { createContext, useState } from "react";

export const Themed = createContext();
const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState("light");

  const handleTheme = () => {
    setIsLight((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Themed.Provider value={{ isLight, handleTheme }}>
      {children}
    </Themed.Provider>
  );
};
export default ThemeProvider;
