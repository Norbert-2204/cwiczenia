import { useEffect, useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Aktualna wartość licznika to: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Licznik: {count}</p>
      <button onClick={() => setCount(count + 1)}>Zwiększ</button>
    </div>
  );
};

export const UserStatus = () => {
  const [onlineUsers, setOnlineUsers] = useState(["Anna", "Jan"]);

  useEffect(() => {
    setTimeout(() => {
      setOnlineUsers(["Anna", "Jan", "Weronika", "Kamil"]);
    }, 2000);
  }, []);

  return (
    <div>
      <h3>Użytkownicy online:</h3>
      <ul>
        {onlineUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Aktualny czas:</h3>
      <p>{time}</p>
    </div>
  );
};

const CharacterList = () => {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, []);

  return (
    <div>
      <h2>Lista postaci z Rick and Morty</h2>
      <ul>
        {character.map((char) => (
          <li key={char.id}>
            <p>{char.name}</p>
            <p>{char.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;

export const Timer = () => {
  const [visible, setVisible] = useState(true);
  const [time, setTime] = useState("");

  const handleVisible = () => {
    visible ? setVisible(false) : setVisible(true);
  };

  useEffect(() => {
    const getTime = () => {
      const timeNow = new Date();
      const hours = String(timeNow.getHours()).padStart(2, "0");
      const mins = String(timeNow.getMinutes()).padStart(2, "0");
      const sec = String(timeNow.getSeconds()).padStart(2, "0");
      const mili = String(timeNow.getMilliseconds());
      setTime(`${hours}:${mins}:${sec}:${mili}`);
    };
    getTime();

    const interval = setInterval(() => {
      getTime();
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Godzina</h1>
      <button onClick={handleVisible}>
        {visible && visible ? "Ukryj godzinę" : "Pokaż godzinę"}
      </button>
      {visible && <h2>{time}</h2>}
    </div>
  );
};
