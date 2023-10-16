import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLock,
} from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [isValidEmail, setIsValidEmail] = useState(true);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setData((prevData) => ({ ...prevData, email: inputEmail }));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  const handleMobileNumberChange = (e) => {
    const inputMobile = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setData((prevData) => ({ ...prevData, mobile: inputMobile }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, mobile, password, confirmPassword } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        mobile,
        password,
        confirmPassword,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error("Email already exists or invalid credentials");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100 p-8">
      <h2 className="text-4xl font-bold mb-8">Sign Up</h2>
      <div className="mb-8">
        <p className="text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
      <div
        className="bg-white p-8 rounded shadow-md w-96 grid grid-cols-2 gap-2"
        onSubmit={registerUser}
      >
        <div className="flex items-center">
          <AiOutlineUser className="mr-2 mb-2" size={20} />
          <label className="text-gray-700 font-semibold mb-2">Name</label>
        </div>
        <input
          type="text"
          name="name"
          className="w-full border border-gray-300 rounded p-2 mb-4"
          placeholder="Your Name"
          value={data.name}
          onChange={handleInputChange}
        />
        <div className="flex items-center">
          <AiOutlineMail className="mr-2 mb-2" size={20} />
          <label className="text-gray-700 font-semibold mb-2">Email</label>
        </div>
        <input
          type="email"
          name="email"
          className={`w-full border border-gray-300 rounded p-2 mb-4 ${
            isValidEmail ? "" : "border-red-500"
          }`}
          placeholder="Your Email"
          value={data.email}
          onChange={handleEmailChange}
        />

        <div className="flex items-center">
          <AiOutlinePhone className="mr-2 mb-2" size={20} />
          <label className="text-gray-700 font-semibold mb-2">Mobile</label>
        </div>
        <input
          type="tel"
          name="mobile"
          className="w-full border border-gray-300 rounded p-2 mb-4"
          placeholder="Your Mobile Number"
          value={data.mobile}
          onChange={handleMobileNumberChange}
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
          value={data.password}
          onChange={handleInputChange}
        />
        <div className="flex items-center">
          <AiOutlineLock className="mr-2 mb-2" size={20} />
          <label className="text-gray-700 font-semibold mb-2">
            Confirm Password
          </label>
        </div>
        <input
          type="password"
          name="confirmPassword"
          className="w-full border border-gray-300 rounded p-2 mb-4"
          placeholder="Confirm Password"
          value={data.confirmPassword}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          onClick={registerUser}
          className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded w-full"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Register;
