const { DataTypes, Sequelize } = require('sequelize');

const db = require('../db/db');

const Order = db.define('Order', {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4,
	},

	total_price: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	user_id: {
		type: DataTypes.STRING(36),
		allowNull: false,
	},
	order_items: {
		type: DataTypes.JSON,
		allowNull: false,
	},
});

module.exports = Order;

// id char(36) PK
// total_price double(6,2)
// user_id char(36)
// createdAt timestamp
// updatedAt timestamp
// order_items json
