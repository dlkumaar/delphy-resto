const Order = require('./../model/orderModel');

// get entire order list
exports.getAllOrders = async (req, res) => {
	const orders = await Order.findAll();

	res.status(200).json({
		data: orders,
	});
};

// get a single order item
exports.getAnOrder = async (req, res) => {
	res.status(200).json({
		message: 'Not defined yet',
	});
};

// create a new order item and include in the order list
exports.createAnOrder = async (req, res) => {
	const order = await Order.create({
		total_price: +req.body.total_price,
		user_id: req.body.user_id,
		order_items: req.body.order_items,
	});

	res.status(201).json({
		data: order,
	});
};

// update a order item in the list
exports.updateAnOrder = (req, res) => {
	res.status(200).json({
		message: 'route yet not defined',
	});
};

// delete a order item from the list
exports.deleteAnOrder = (req, res) => {
	res.status(200).json({
		message: 'route yet not defined',
	});
};
