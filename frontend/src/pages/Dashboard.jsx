import React from "react";

const Dashboard = () => {
  const role = localStorage.getItem("role"); // Get stored role

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>Your Role: {role}</p>
    </div>
  );
};

export default Dashboard;
