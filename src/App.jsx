import "./App.css";
import Product from "./components/Products";
import UserCard from "./components/UserCard";
// import { useState } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoItem from "./components/TodoItem.jsx";
import Button from "./components/ChangeDirection.jsx";
import SwitchLanguage from "./components/ChangeLanguage.jsx";
import Greeting from "./components/Greeting.jsx";
import Submit from "./components/form.jsx";
import FormApp from "./components/useForm-zod.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import TestField from "./components/useFieldArr.jsx";
import TailwindTesting from "./components/Tailwind.jsx";
import CharacterList, {
  Clock,
  Counter,
  UserStatus,
  Timer,
} from "./components/useEffect.jsx";
import Dashboard from "./components/props drilling/Dashboard.jsx";
import Post from "./components/props drilling/Post.jsx";

function App() {
  const book = {
    title: "Nowości w React 19",
    author: "Agnieszka",
    published: "2025-07-01",
    comments: 12,
  };

  return (
    <div>
      <Post {...book} />
    </div>
  );
}

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
