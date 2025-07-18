import { useContext } from "react";
import { Context } from "./UserProvider";

const Navbar = () => {
  const username = useContext(Context);
  return (
    <nav>
      <p>Zalogowany jako: {username}</p>
    </nav>
  );
};
export default Navbar;
