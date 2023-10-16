import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Hello</h1>
      {user && <h2 className="text-2xl">Hi, {user.name}!</h2>}
    </div>
  );
};

export default Dashboard;
