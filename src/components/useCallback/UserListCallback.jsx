import { memo } from "react";

const UserListCallback = memo(({ users, filterFn }) => {
  console.log("render: UserList");

  const filtered = users.filter(filterFn);

  return (
    <ul>
      {filtered.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
});
export default UserListCallback;
