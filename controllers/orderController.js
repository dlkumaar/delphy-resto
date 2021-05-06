// get entire order list
exports.getAllOrders = (req, res) => {
	res.status(200).json({
		data: [1, 2, 3],
	});
};

// get a single order item
exports.getAnOrder = (req, res) => {
	res.status(200).json({
		message: 'Not defined yet',
	});
};

// create a new order item and include in the order list
exports.createAnOrder = (req, res) => {
	const data = req.body;
	res.status(201).json({
		data,
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
