const db = require('./db');

const createTables = async () => {
	// 1) users table
	await db.query(`DROP TABLE IF EXISTS users`);
	await db.query(`CREATE TABLE users(
    id                      INTEGER PRIMARY KEY,
    first_name              VARCHAR(16) NOT NULL,
    last_name               VARCHAR(16) NOT NULL,  
    email                   VARCHAR(120) NOT NULL,
    telephone               VARCHAR(10) NOT NULL,
    address                 VARCHAR(120) NOT NULL,
    password                VARCHAR(10) NOT NULL,
    admin                   BOOLEAN NOT NULL DEFAULT FALSE,
    created_at              TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
    )`);

	// 2) menu table
	await db.query(`DROP TABLE IF EXISTS menu`);
	await db.query(`CREATE TABLE menu(
    id                      CHAR(10) NOT NULL PRIMARY KEY,
    name                    VARCHAR(30) NOT NULL
)`);

	// 3) dish table
	await db.query(`DROP TABLE IF EXISTS dish`);
	await db.query(`CREATE TABLE dish (
    id                      INTEGER PRIMARY KEY,
    name                    VARCHAR(30) NOT NULL,
    description             VARCHAR(255) NULL, 
    price                   DOUBLE(6, 2) NOT NULL,
    image                   VARCHAR(255) NULL,
    stock                   BOOLEAN NOT NULL DEFAULT TRUE,
    spicy                   BOOLEAN NOT NULL,
    vegetarian              BOOLEAN NOT NULL
)`);

	// 4) menu_dishes table - dish references to menu - ONE TO MANY
	await db.query(`DROP TABLE IF EXISTS menu_dishes`);
	await db.query(`CREATE TABLE menu_dishes(
    menu_id                   CHAR(10) REFERENCES menu(id),
    dish_id                   INTEGER REFERENCES dish(id),
    PRIMARY KEY (menu_id, dish_id)
  )`);

	// 5) orders tables
	await db.query(`DROP TABLE IF EXISTS orders`);
	await db.query(`CREATE TABLE orders(
    id                      INTEGER PRIMARY KEY,
    user_id                 INTEGER NOT NULL,
    total                   DOUBLE(6,2) NOT NULL,
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`);

	// 6) client_order table - ONE TO MANY
	await db.query(`DROP TABLE IF EXISTS client_orders`);
	await db.query(`CREATE TABLE client_orders(
    id                      INTEGER,
    user_id                 INTEGER REFERENCES users(id),
    order_id                INTEGER REFERENCES orders(id),
    dish_id                 INTEGER REFERENCES dish(id),
    PRIMARY KEY(order_id, user_id)
)`);

	// 7) favorite_dishes table
	await db.query(`DROP TABLE IF EXISTS favorite_dishes`);
	await db.query(`CREATE TABLE favorite_dishes(
    id                      INTEGER,
    user_id                 INTEGER NOT NULL REFERENCES users(id),
    dish_id                 INTEGER NOT NULL REFERENCES orders(id),
    PRIMARY KEY(user_id, dish_id)
)`);

	console.log('Tables created in the database = [deliah_resto]');
};

createTables();
