import { createContext } from "react";

export const Context = createContext();

const UserProvider = ({ children }) => {
  const username = "Jan";
  return <Context.Provider value={username}>{children}</Context.Provider>;
};
export default UserProvider;
