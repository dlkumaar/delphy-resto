CREATE TABLE users(
    id                      INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name              VARCHAR(16) NOT NULL,
    last_name               VARCHAR(16) NOT NULL,  
    email                   VARCHAR(120) NOT NULL,
    telephone               VARCHAR(10) NOT NULL,
    address                 VARCHAR(120) NOT NULL,
    password                VARCHAR(10) NOT NULL,
    admin                   BOOLEAN NOT NULL DEFAULT FALSE,
    created_at              TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
)


CREATE TABLE menu (
  id                        CHAR(10) PRIMARY KEY,
  name                      VARCHAR(20),
);


CREATE TABLE dish (
    id                      INTEGER PRIMARY KEY AUTO_INCREMENT,
    name                    VARCHAR(30) NOT NULL,
    description             VARCHAR(255) NULL, 
    price                   DOUBLE(6, 2) NOT NULL,
    image                   VARCHAR(255) NULL,
    stock                   BOOLEAN NOT NULL DEFAULT TRUE,
    spicy                   BOOLEAN NOT NULL,
    vegetarian              BOOLEAN NOT NULL
);


CREATE TABLE menu_dishes(
  menu_id             CHAR(10) REFERENCES menu(id),
  dish_id                   INTEGER REFERENCES dish(id)
  PRIMARY KEY (menu_id, dish_id)
);


CREATE TABLE orders(
    id                      INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id                 INTEGER NOT NULL,
    total                   DOUBLE(6,2) NOT NULL,
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)


CREATE TABLE client_orders(
    id                      INTEGER AUTO_INCREMENT,
    user_id                 INTEGER REFERENCES users(id)
    order_id                INTEGER REFERENCES orders(id),
    dish_id                 INTEGER REFERENCES dish(id),
    PRIMARY KEY(DISH_id, user_id)
)


CREATE TABLE favorites(
    id                      INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id                 INTEGER REFERENCES users(id),
    dish_id                 INTEGER REFERENCES orders(id),
    PRIMARY KEY(user_id, dish_id)
)