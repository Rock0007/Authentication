const router = require("express").Router();
const cors = require("cors");
const dotenv = require("dotenv").config();
const {
  test,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

//middleware
router.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);

router.get("/", test);

//POST Register
router.post("/register", registerUser);

//Post Login
router.post("/login", loginUser);

//Get Profile
router.get("/profile", getProfile);

module.exports = router;
