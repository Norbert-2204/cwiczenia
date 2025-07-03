import "./App.css";
import Product from "./components/useState/Products.jsx";
import UserCard from "./components/useState/UserCard.jsx";
// import { useState } from "react";
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

function App() {
  return (
    <>
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
    </>
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
