const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

// creates user
const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // check if user is already registered
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // creates user
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ error: "User registration failed" });
  }
};

// login user
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "login failed" });
  }
};

module.exports = {
  register,
  login,
};
