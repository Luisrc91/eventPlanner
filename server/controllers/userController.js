const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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

module.exports = {
  register,
};
