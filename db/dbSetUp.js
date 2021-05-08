const db = require('./db');

const createTables = async () => {
	// 1) users table
	await db.query(`DROP TABLE IF EXISTS users`);
	await db.query(`CREATE TABLE users(
    id                      CHAR(36) PRIMARY KEY,
    first_name              VARCHAR(16) NOT NULL,
    last_name               VARCHAR(16) NOT NULL,  
    email                   VARCHAR(120) NOT NULL,
    telephone               VARCHAR(10) NOT NULL,
    address                 VARCHAR(120) NOT NULL,
    password                VARCHAR(10) NOT NULL,
    admin                   BOOLEAN NOT NULL DEFAULT FALSE,
    createdAt               TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt               TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
    )`);

	// 2) menu table
	await db.query(`DROP TABLE IF EXISTS menus`);
	await db.query(`CREATE TABLE menus(
    id                      CHAR(36) NOT NULL PRIMARY KEY,
    dish_type               ENUM('veg', 'non-veg', 'kosher')

)`);

	// 3) dish table
	await db.query(`DROP TABLE IF EXISTS dishes`);
	await db.query(`CREATE TABLE dishes (
    id                      CHAR(36) PRIMARY KEY,
    name                    VARCHAR(30) NOT NULL,
    description             VARCHAR(255) NULL, 
    price                   DOUBLE(6, 2) NOT NULL,
    image                   VARCHAR(255) NULL,
    stock                   BOOLEAN NOT NULL DEFAULT TRUE,
    spicy                   BOOLEAN NOT NULL
)`);

	// 4) menu_dishes table - dish references to menu - ONE TO MANY
	await db.query(`DROP TABLE IF EXISTS menu_dishes`);
	await db.query(`CREATE TABLE menu_dishes(
    menu_id                   CHAR(36) REFERENCES menus(id),
    dish_id                   CHAR(36) REFERENCES dishes(id),
    dish_name                 VARCHAR(30) REFERENCES dishes(name),                
    PRIMARY KEY (menu_id, dish_id)
  )`);

	// 5) orders tables
	await db.query(`DROP TABLE IF EXISTS orders`);
	await db.query(`CREATE TABLE orders(
    id                      CHAR(36) PRIMARY KEY,
    total                   DOUBLE(6,2) NOT NULL,
    createdAt               TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt               TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`);

	// 6) client_order table - ONE TO MANY
	await db.query(`DROP TABLE IF EXISTS client_orders`);
	await db.query(`CREATE TABLE client_orders(
    order_id                CHAR(36) REFERENCES orders(id),
    user_id                 CHAR(36) REFERENCES users(id),
    dish_id                 CHAR(36) REFERENCES dishes(id),
    dish_name               VARCHAR(30) REFERENCES dishes(name),
    PRIMARY KEY(order_id, user_id)
)`);

	// 7) favorite_dishes table
	await db.query(`DROP TABLE IF EXISTS favorite_dishes`);
	await db.query(`CREATE TABLE favorite_dishes(
    user_id                 CHAR(36) REFERENCES users(id),
    dish_id                 CHAR(36) REFERENCES dishes(id),
    PRIMARY KEY(user_id, dish_id)
)`);

	console.log('Tables created in the database = [deliah_resto]');
};

createTables();
