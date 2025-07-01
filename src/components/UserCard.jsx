const UserCard = ({ name, age, isOnline }) => {
  return (
    <p>
      imie: {name}, wiek: {age}, zalogowany: {isOnline ? "online" : "off-line"}
    </p>
  );
};
export default UserCard;
