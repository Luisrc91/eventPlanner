const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require( '../middleware/auth')
// Define routes for user sign up
router.post('/register', userController.register);
// Define routes for user sign in
router.get('/login', userController.login);
// Define routes for user update
router.put('/update', authenticate, userController.updateUser);

module.exports = router;
