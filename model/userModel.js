const { DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

const db = require('../db/db');

const User = db.define('User', {
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
		type: DataTypes.STRING(255),
		allowNull: false,
	},
	admin: {
		type: DataTypes.BOOLEAN,
	},
});

module.exports = User;

// encrypt the password befoe save
User.beforeCreate(async function (user) {
	user.password = await bcrypt.hash(user.password, 10);
});

// check for correct password - returns true if correct
User.prototype.correctPassword = async function (password, hashedPassword) {
	return await bcrypt.compare(password, hashedPassword);
};

module.exports = User;
