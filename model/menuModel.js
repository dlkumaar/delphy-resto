const { DataTypes, Sequelize } = require('sequelize');

const db = require('../db/db');

const Menu = db.define(
	'Menu',
	{
		// model attributes - sequelize adds ID as primary key by default
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4,
		},

		dish_type: {
			type: DataTypes.ENUM({
				values: ['veg', 'non-veg', 'kosher'],
			}),
			allowNull: false,
		},
	},
	{ timestamps: false }
);

module.exports = Menu;

// Sample data
// {
// 	"id": "auto generated",
// 	"name": "Veggie" || "Kosher" || "English",
//  }
