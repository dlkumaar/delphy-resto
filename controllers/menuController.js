const { QueryTypes } = require('sequelize');
const Menu = require('./../model/menuModel');
const Dish = require('./../model/dishModel');
const db = require('./../db/db');

// get entire menu list
exports.getAllMenuItems = (req, res) => {};

// get a single menu item
exports.getMenuItem = (req, res) => {
	const id = req.params.id;
};

// create a new menu item and include in the menu list
exports.createAMenuItem = async (req, res) => {
	const menu = await Menu.create({
		dish_type: req.body.dish_type,
	});

	const dish = await Dish.create({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		image: req.body.image,
		stock: req.body.stock,
		spicy: req.body.spicy,
	});

	// const newMenu = await menu.save();

	res.status(201).json({
		menu,
		dish,
		message: 'Menu created',
	});
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
