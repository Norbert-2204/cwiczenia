import { useState, useCallback } from "react";
import UserListCallback from "./UserListCallback";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Dave" },
  { id: 6, name: "Artem" },
];

export function CallbackFilterUsers() {
  const [query, setQuery] = useState("");

  // TODO: użyj useCallback, aby handleFilter miało stabilną referencję
  const handleFilter = useCallback(
    (user) => {
      return user.name.toLowerCase().includes(query.toLowerCase());
    },
    [query]
  );

  return (
    <div>
      <h2>Ćwiczenie: Filtrowanie użytkowników z useCallback</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Szukaj użytkownika..."
      />
      <UserListCallback users={users} filterFn={handleFilter} />
    </div>
  );
}
export default CallbackFilterUsers;
