import { useContext } from "react";
import { Context } from "./UserProvider";

const Profile = () => {
  const username = useContext(Context);
  return (
    <div>
      <h2>Profil użytkownika</h2>
      <p>Imię: {username}</p>
    </div>
  );
};
export default Profile;
