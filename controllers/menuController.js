const { pool } = require('./../db/db');

// get entire menu list
exports.getAllMenuItems = (req, res) => {
	pool.query('SELECT * FROM menu', (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).json(results.rows);
	});
};

// get a single menu item
exports.getMenuItem = (req, res) => {
	const id = req.params.id;

	const query = {
		// give the query a unique name
		name: 'fetch-a-menu-item',
		text: 'SELECT * FROM menu WHERE id = $1',
		values: [id],
	};

	pool
		.query(query)
		.then((results) => res.status(200).json(results.rows))
		.catch((err) => res.status(401).json(err.stack));
};

// create a new menu item and include in the menu list
exports.createAMenuItem = (req, res) => {
	const newMenuItem = [
		req.body.id,
		req.body.name,
		req.body.description,
		req.body.hot_and_spicy,
	];
	const query = {
		text:
			'INSERT INTO dish(id, name, description, hot_and_spicy) VALUES($1, $2, $3, $4)',
		values: newMenuItem,
	};

	pool
		.query(query)
		.then((results) =>
			res.status(201).json({
				data: results,
			})
		)
		.catch((e) => res.status(401).json(e));

	// const data = req.body;
	// res.status(201).json({
	// 	data,
	// });
};

// update a menu item in the list
exports.updateAMenuItem = (req, res) => {
	res.status(200).json({
		message: 'route yet not defined',
	});
};

// delete a menu item from the list
exports.deleteAMenuItem = (req, res) => {
	res.status(200).json({
		message: 'route yet not defined',
	});
};
