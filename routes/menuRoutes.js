const express = require('express');
const menuController = require('./../controllers/menuController');

const router = express.Router();

router
	.route('/')
	.get(menuController.getAllMenuItems)
	.post(menuController.createAMenuItem);

router
	.route('/:id')
	.get(menuController.getMenuItem)
	.patch(menuController.updateAMenuItem)
	.delete(menuController.deleteAMenuItem);

module.exports = router;
