const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router
	.route('/')
	.get(userController.getAllUsers)
	.post(userController.createAnUser);

router
	.route('/:id')
	.get(userController.getAnUser)
	.patch(userController.updateAnUser)
	.delete(userController.deleteAnUser);

module.exports = router;
