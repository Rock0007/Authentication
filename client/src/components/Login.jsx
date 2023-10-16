import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", credentials); // Replace with your actual API endpoint
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Login Successful. Welcome!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100 p-8">
      <h2 className="text-4xl font-bold mb-8">Login</h2>
      <div className="mb-8">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
      <div className="bg-white p-8 rounded shadow-md w-96 grid grid-cols-2 gap-2">
        <div className="flex items-center">
          <AiOutlineMail className="mr-2 mb-2" size={20} />
          <label className="text-gray-700 font-semibold mb-2">Email</label>
        </div>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 rounded p-2 mb-4"
          placeholder="Your Email"
          value={credentials.email}
          onChange={handleInputChange}
        />
        <div className="flex items-center">
          <AiOutlineLock className="mr-2 mb-2" size={20} />
          <label className="text-gray-700 font-semibold mb-2">Password</label>
        </div>
        <input
          type="password"
          name="password"
          className="w-full border border-gray-300 rounded p-2 mb-4"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <div className="mb-8">
          <a href="" className="text-blue-500 hover:underline cursor-pointer">
            Forgot password?
          </a>
        </div>
        <button
          onClick={loginUser}
          className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
