import UserInfo from "./UserInfo";
const Sidebar = ({ username }) => {
  return (
    <div>
      <h3>Sidebar</h3>
      <UserInfo username={username} />
    </div>
  );
};
export default Sidebar;
