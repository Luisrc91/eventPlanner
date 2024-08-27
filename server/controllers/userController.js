const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

// creates user
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user or email is already registered
    const existingUser = await User.findOne({ where: { username } });
    const existingEmail = await User.findOne({ where: { email } });
    if (existingUser || existingEmail) {
      return res.status(400).json({ error: "Username or Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const user = await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ error: "User registration failed" });
  }
};

// login a user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
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
    res.status(500).json({ error: "Login failed" });
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userId = req.user.userId;
    let user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (username) {
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser && existingUser.id !== userId) {
        return res.status(400).json({ error: "Username already taken" });
      }
      user.username = username;
    }
    if (email) {
      const existingEmail = await User.findOne({ where: { email } });
      if (existingEmail && existingEmail.id !== userId) {
        return res.status(400).json({ error: "Email already taken" });
      }
      user.email = email;
    }
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }
    await user.save();
    res.json({ message: "User updated successfully", user });
  } catch (err) {
    res.status(500).json({ error: "User update failed" });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    console.log("Delete user request received");
    const userId = req.user.userId;
    console.log("Authenticated user ID:", userId);
    const userToDeleteId = req.params.id;
    console.log("User to delete ID:", userToDeleteId);
    if (userId !== parseInt(userToDeleteId)) {
      return res.status(401).json({ error: "You can only delete your own account!" });
    }
    const user = await User.findByPk(userToDeleteId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.destroy();
    console.log("User deleted successfully");
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "User deletion failed" });
  }
};


module.exports = {
  register,
  login,
  updateUser,
  deleteUser
};
