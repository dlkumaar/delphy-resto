const { DataTypes, Sequelize } = require('sequelize');

const db = require('../db/db');

const User = db.define('User', {
	// model attributes - sequelize adds ID as primary key by default
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4,
	},

	first_name: {
		type: DataTypes.STRING(16),
		allowNull: false,
	},
	last_name: {
		type: DataTypes.STRING(16),
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING(120),
		allowNull: false,
	},
	telephone: {
		type: DataTypes.STRING(10),
		allowNull: false,
	},
	address: {
		type: DataTypes.STRING(120),
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING(10),
		allowNull: false,
	},
	admin: {
		type: DataTypes.BOOLEAN,
	},
});

module.exports = User;

// Sample data
// {
// 	"first_name": "Rahul",
// 	"last_name": "Kumar",
// 	"email": "test@gmail.com",
// 	"address": "salguero 2330",
// 	"password": "123344",
// 	"telephone": "9093844",
// 	"admin": "false",
//  }
