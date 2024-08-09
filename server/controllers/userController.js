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
    // creates user
    const user = await User.create({ username, password });
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ error: "User registration failed" });
  }
};

module.exports = {
  register,
};
