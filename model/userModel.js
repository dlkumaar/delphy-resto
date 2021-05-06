const { DataTypes } = require('sequelize');

const db = require('../db/db');

const User = db.define(
	'User',
	{
		// model attributes - sequelize adds ID as primary key by default
		first_name: {
			type: DataTypes.STRING(15),
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING(15),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		telephone: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING(8),
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

module.exports = User;
// nombre varchar(32) NOT NULL,
// integrantes INT NOT NULL,
// fecha_inicio date NOT NULL,
// fecha_separacion date,
// pais varchar(24) NOT NULL
