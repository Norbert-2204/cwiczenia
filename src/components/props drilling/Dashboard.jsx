import Sidebar from "./Sidebar";
const Dashboard = ({ username }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Sidebar username={username} />
    </div>
  );
};
export default Dashboard;
