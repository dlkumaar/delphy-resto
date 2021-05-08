const { QueryTypes } = require('sequelize');
const User = require('./../model/userModel');
const db = require('./../db/db');

// get all users
exports.getAllUsers = async (req, res) => {
	const users = await User.findAll();

	res.status(200).json({
		users,
	});
};

// get a single menu item
exports.getAnUser = async (req, res) => {
	const userId = req.params.id;
	const user = await User.findAll({
		where: {
			id: userId,
		},
	});

	res.status(200).json({
		user,
	});
};

// create a new menu item and include in the menu list
exports.createAnUser = async (req, res) => {
	const user = await User.build({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		telephone: req.body.telephone,
		address: req.body.address,
		admin: req.body.admin,
		password: req.body.password,
	});

	const newUser = await user.save();

	res.status(201).json({
		user: newUser,
		message: 'User created',
	});
};

// update a menu item in the list
exports.updateAnUser = async (req, res) => {
	const userToUpdate = req.params.id;
	const newUser = await db.query(
		`UPDATE users SET first_name = 'Carlos' WHERE id = '${userToUpdate}'`,
		{ type: QueryTypes.UPDATE }
	);

	res.status(200).json({
		newUser,
		message: 'route yet not defined',
	});
};

// delete a menu item from the list
exports.deleteAnUser = async (req, res) => {
	const userToDelete = req.params.id;
	const deletedUser = await db.query(
		`DELETE FROM users WHERE id = '${userToDelete}'`,
		{ type: QueryTypes.DELETE }
	);

	res.status(200).json({
		message: deletedUser,
	});
};
