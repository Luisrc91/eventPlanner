const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth");
const {
  updateUser,
  deleteUser,
  getProfile,
} = require("../controllers/userController");

// Define routes for user update
router.put("/update", authenticate, updateUser);
//Define routes for deleting
router.delete("/:id", authenticate, deleteUser);
// Define routes for geting profile
router.get("/profile", authenticate, getProfile);

module.exports = router;

// // Define routes for user sign up
// router.post("/register", register);
// // Define routes for user sign in
// router.post("/login", login);