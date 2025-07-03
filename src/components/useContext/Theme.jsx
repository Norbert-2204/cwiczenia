import { useContext } from "react";
import { Themed } from "./ChangeTheme";

const Theme = () => {
  const { isLight, handleTheme } = useContext(Themed);
  return (
    <div
      className={
        isLight === "light"
          ? "bg-white border-2 rounded-xl"
          : "bg-gray-800 text-white rounded-xl"
      }
    >
      <div className="p-10 ">
        <h1>UseContext</h1>
        <h2>Zmiana motywu</h2>
        <button
          onClick={handleTheme}
          className={
            isLight === "light" ? "bg-blue-700 text-white" : "bg-green-700"
          }
        >
          {isLight === "light" ? "Zmień na ciemny" : "Zmień na jasny"}
        </button>
      </div>
    </div>
  );
};
export default Theme;
