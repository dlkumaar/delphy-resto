const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const { Sequelize } = require('sequelize');

// connecting to database

const db = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	}
);

db.authenticate()
	.then(() => {
		console.log('Connected to database!');
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = db;
