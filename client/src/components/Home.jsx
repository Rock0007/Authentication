import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page!</h1>
      <nav className="space-y-4">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/login"
              className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded transition duration-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded transition duration-300"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
