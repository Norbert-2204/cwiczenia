import { useState, useReducer } from "react";

const initialProducts = [
  { id: 1, name: "Jabłko", price: 3 },
  { id: 2, name: "Chleb", price: 5 },
  { id: 3, name: "Mleko", price: 4 },
];

export function Cart() {
  const [selectedId, setSelectedId] = useState(initialProducts[0].id);

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD": {
        const product = action.product;
        const existing = state.find((item) => item.id === product.id);
        return existing
          ? state.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state, { ...product, quantity: 1 }];
      }
      case "DELETE": {
        return state.filter((item) => item.id !== action.id);
      }
      case "DECREASE": {
        return state
          .map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
      }
      default:
        return state;
    }
  };
  const [cart, dispatch] = useReducer(reducer, []);

  const handleAdd = () => {
    const product = initialProducts.find((p) => p.id === selectedId);
    dispatch({ type: "ADD", product });
  };

  const handleDecrease = (id) => {
    dispatch({ type: "DECREASE", id });
  };

  function handleRemove(id) {
    dispatch({ type: "DELETE", id });
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Koszyk zakupów</h2>

      <div>
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(Number(e.target.value))}
        >
          {initialProducts.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name} – {product.price} zł
            </option>
          ))}
        </select>
        <button onClick={handleAdd}>Dodaj do koszyka</button>
      </div>

      <h3>Twój koszyk:</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} – {item.price} zł x {item.quantity}{" "}
            <button onClick={() => handleAdd()}>+</button>
            <button onClick={() => handleDecrease(item.id)}>-</button>
            <button onClick={() => handleRemove(item.id)}>🗑</button>
          </li>
        ))}
      </ul>

      <p>Łączna cena: {total} zł</p>
    </div>
  );
}
export default Cart;
