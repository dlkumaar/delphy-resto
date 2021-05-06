const express = require('express');
const orderController = require('./../controllers/orderController');

const router = express.Router();

router
	.route('/')
	.get(orderController.getAllOrders)
	.post(orderController.createAnOrder);

router
	.route('/:id')
	.get(orderController.getAnOrder)
	.patch(orderController.updateAnOrder)
	.delete(orderController.deleteAnOrder);

module.exports = router;
