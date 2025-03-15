import React, { useContext } from "react";
import AuthContext from "../context/AuthContext"; // ✅ Import AuthContext

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {user ? <p>Logged in</p> : <p>Not logged in</p>}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
