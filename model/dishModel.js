const { DataTypes, Sequelize } = require('sequelize');

const db = require('../db/db');

const Dish = db.define(
	'Dish',
	{
		// model attributes - sequelize adds ID as primary key by default
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4,
		},

		name: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		price: {
			type: DataTypes.DOUBLE(6, 2),
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		stock: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		spicy: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

module.exports = Dish;

// Sample data
// {
// 	"name": "fish",
// 	"description": "ssaasabsjbdadh advahsdv",
// 	"price": 12.22,
// 	"image": "salguero2330",
// 	"stock": true,
// 	"spicy": true
//  }
