const express = require('express');

const authController = require('../controller/authController');

const auth = require('../middlewares/auth');

const router = express.Router();

//user

//register
router.post('/register', authController.register);

//login
router.post('/login', authController.login);

//logout
router.post('/logout', auth, authController.logout);

//reresh
router.get('/refresh', authController.refresh);


module.exports = router;
