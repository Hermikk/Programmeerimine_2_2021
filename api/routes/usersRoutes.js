const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();
const validators = require('../middlewares/validators');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');



/**
 * Users API endpoints
 */
router.get('/', usersController.getUsers);
router.get('/:id', validators.getUserById, usersController.getUserById);
router.post('/', usersController.createUser);
router.post('/login', usersController.login);
router.patch('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);
router.get('/', isAdmin, usersController.getUsers);


module.exports = router;
