import "./App.css";
import Product from "./components/useState/Products.jsx";
import UserCard from "./components/useState/UserCard.jsx";
import { useState } from "react";
import TodoInput from "./components/useState/TodoInput.jsx";
import TodoItem from "./components/useState/TodoItem.jsx";
import Button from "./components/useState/ChangeDirection.jsx";
import SwitchLanguage from "./components/useState/ChangeLanguage.jsx";
import Greeting from "./components/useState/Greeting.jsx";
import Submit from "./components/useState/form.jsx";
import FormApp from "./components/useForm.Effect.Field/useForm-zod.jsx";
import RegisterForm from "./components/useForm.Effect.Field/RegisterForm.jsx";
import TestField from "./components/useForm.Effect.Field/useFieldArr.jsx";
import CharacterList, {
  Clock,
  Counter,
  UserStatus,
  Timer,
} from "./components/useForm.Effect.Field/useEffect.jsx";
import Dashboard from "./components/props drilling/Dashboard.jsx";
import Post from "./components/props drilling/Post.jsx";
import ExampleComponent from "./components/Tailwind.jsx";
import Navbar from "./components/useContext/Navbar.jsx";
import Profile from "./components/useContext/Profile.jsx";
import UserProvider from "./components/useContext/UserProvider.jsx";
import Theme from "./components/useContext/Theme.jsx";
import ThemeProvider from "./components/useContext/ChangeTheme.jsx";
import { useCalculateYearsSince } from "./components/custonHooks/useCalculateYearsSince.js";
import { useFilterUsers } from "./components/custonHooks/useFilterUsers.js";
import { useLocalStorage } from "./components/custonHooks/useLocalStorage.js";
import Modal from "./components/react portal/modal.jsx";
import { ProductList } from "./components/useMemo/ProductList.jsx";
import { ExpensiveCalculation } from "./components/useMemo/SlowFunction.jsx";
import CallbackFilterUsers from "./components/useCallback/CallbackFilterUsers.jsx";
import VisualCounters from "./components/useCallback/VisualCounters.jsx";

const App = () => {
  return (
    <div>
      <VisualCounters />
    </div>
  );
};

export default App;

// to jest do ToDo

// const [todos, setTodos] = useState([]);
//   const addTodo = (text) => {
//     setTodos((prevTodo) => [...prevTodo, text]);
//   };
//   return (
//     <div>
//       <h1>Lista zadań</h1>
//       <TodoInput onAdd={addTodo} />
//       <ul>
//         {todos.map((todo, index) => (
//           <TodoItem key={index} text={todo} />
//         ))}
//       </ul>
//     </div>
//   );

// to jest do Licznika ze zmianą kierunku

// const [count, setCount] = useState(0);
//   const [direction, setDirection] = useState(true);

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//       <Button
//         style={{ backgroundColor: "blue" }}
//         onClick={() => setDirection(direction ? false : true)}
//       >
//         Zmień kierunek
//       </Button>
//       <Button
//         style={{ backgroundColor: direction ? "green" : "red" }}
//         onClick={() => (direction ? setCount(count + 1) : setCount(count - 1))}
//       >
//         {direction ? "Zwiększ" : "Zmniejsz"}
//       </Button>
//       <p>Wartość: {count}</p>
//
//     </div>

// change language
// {/* <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//       <SwitchLanguage />
//       <Greeting></Greeting>
//     </div> */}

// props drilling 1
//  const username = "Kasia";

//   return (
//     <div>
//       <h1>Aplikacja</h1>
//       <Dashboard username={username} />
//     </div>
//   );

// props drilling 2
// const book = {
//     title: "Nowości w React 19",
//     author: "Agnieszka",
//     published: "2025-07-01",
//     comments: 12,
//   };

//   return (
//     <div>
//       <Post {...book} />
//     </div>
//   );

// userProvider
{
  /* <div>
      <UserProvider>
        <Navbar />
        <Profile />
      </UserProvider>
    </div> */
}

// custom hooks

// zadanie 1
// const eventData = {
//   eventName: "Rocznica założenia firmy",
//   eventDate: "2000-01-01",
// };

// const App = () => {
//   const yearsPassed = useCalculateYearsSince(eventData.eventDate);
//   return (
//     <h2>
//       {eventData.eventName}, minęło lat: {yearsPassed}
//     </h2>
//   );
// };

// zadanie 2

// const [filter, setFilter] = useState("");
//   const { data, loading, error } = useFilterUsers();
//   const filteredUsers = data
//     ? data.filter((user) =>
//         user.name.toLowerCase().includes(filter.toLowerCase())
//       )
//     : [];

//   return (
//     <div>
//       <input
//         type="text"
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//         placeholder="Szukaj użytkownika..."
//       />
//       {loading && <p>Ładowanie</p>}
//       {error && <p>{error}</p>}
//       {!loading && filteredUsers.length === 0 && <p>Brak wyników</p>}
//       <ul>
//         {filteredUsers.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );

// zadanie 3

// const [inputName, setInputName] = useState("");
//   const [names, setNames] = useLocalStorage("names", []);
//   const [showList, setShowList] = useState(false);

//   const addName = () => {
//     if (inputName.trim()) {
//       setNames([...names, inputName]);
//       setInputName("");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputName}
//         onChange={(e) => setInputName(e.target.value)}
//         placeholder="Wpisz imię"
//       />
//       <button onClick={addName}>Dodaj do localStorage</button>
//       <button onClick={() => setShowList(!showList)}>
//         {showList ? "Ukryj listę" : "Pokaż zapisane imiona"}
//       </button>

//       {showList && (
//         <ul>
//           {names.length === 0 ? (
//             <li>Brak zapisanych imion</li>
//           ) : (
//             names.map((name, index) => <li key={index}>{name}</li>)
//           )}
//         </ul>
//       )}
//     </div>
//   );

// Modal

//  const [isModalOpen, setIsModalOpen] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [items, setItems] = useState(["Element 1", "Element 2", "Element 3"]);

//   const toggleModal = () => {
//     setIsModalOpen((prev) => !prev);
//   };

//   return (
//     <div>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           setItems((prevItems) => [...prevItems, inputValue]);
//           setInputValue("");
//         }}
//       >
//         <input
//           name="item"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           required
//         />
//         <button type="submit">Dodaj</button>
//       </form>
//       <button onClick={toggleModal}>Pokaż szczegóły</button>
//       {isModalOpen && <Modal onClose={toggleModal} itemsCount={items.length} />}
//     </div>
//   );
