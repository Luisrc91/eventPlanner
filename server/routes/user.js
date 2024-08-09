const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for user sign up
router.post('/register', userController.register);

module.exports = router;
