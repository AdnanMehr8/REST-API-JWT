const express = require('express');

const authController = require('../controller/authController');

const blogController = require('../controller/blogController');

const commentContoller = require('../controller/commentController');

const auth = require('../middlewares/auth');

const comment = require('../models/comment');

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


//blog

//CRUD
//create
//read all blogs
// read blog by id
//update
//delete

// create
router.post('/blog', auth, blogController.create);

// get all
router.get('/blog/all', auth, blogController.getAll);

// get blog by id
router.get('/blog/:id', auth, blogController.getById);

// update
router.put('/blog', auth, blogController.update);

// delete
router.delete('/blog/:id', auth, blogController.delete);



//comment
//create comment
router.post('/comment', auth, commentContoller.create);

//read comment by blog id
router.get('/comment/:id', auth, commentContoller.getById);


module.exports = router;