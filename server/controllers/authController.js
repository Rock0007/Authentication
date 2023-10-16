const User = require("../models/user");
const { comparepassword, hashpassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

//test
const test = async (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, password, confirmPassword } = req.body;
    // Check if name, email, mobile, password, and confirmPassword were provided
    if (!name || !email || !mobile || !password || !confirmPassword) {
      return res.status(400).json({
        error:
          "All fields (name, email, mobile, password, confirmPassword) are required.",
      });
    }
    // Validate mobile number (should be a number)
    if (isNaN(mobile) || mobile.toString().length !== 10) {
      return res.status(400).json({
        error:
          "Invalid mobile number. Please provide a 10-digit mobile number.",
      });
    }
    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({
        error: "Password should be at least 6 characters long.",
      });
    }
    // Check if password matches confirmPassword
    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Password and confirm password do not match.",
      });
    }
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        error: "Email already exists.",
      });
    }
    // Hash the password
    const hashedPassword = await hashpassword(password);
    // Create user in the database
    const user = await User.create({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal server error. Please try again later.",
    });
  }
};

//Login Endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      // Return a 401 status code for unauthorized access
      return res.status(401).json({
        error: "Invalid credentials.",
      });
    }
    // Check password
    const isPasswordMatch = await comparepassword(password, user.password);
    if (isPasswordMatch) {
      // Generate JWT token
      const token = jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET
      );
      res.cookie("token", token, { httpOnly: true }).json(user);
    } else {
      return res.status(401).json({
        error: "Invalid credentials.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal server error. Please try again later.",
    });
  }
};

const getProfile = async (req, res) => {
  const { token } = req.cookies;
  try {
    if (token) {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      res.json(user);
    } else {
      res.json(null);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error. Please try again later.",
    });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
