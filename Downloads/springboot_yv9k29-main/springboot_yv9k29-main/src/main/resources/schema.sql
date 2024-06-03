CREATE TABLE IF NOT EXISTS users (
                                     id BIGINT PRIMARY KEY AUTO_INCREMENT,
                                     name VARCHAR(255),
    email VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255)
    );

CREATE TABLE IF NOT EXISTS categories (
                                          id BIGINT PRIMARY KEY AUTO_INCREMENT,
                                          name VARCHAR(255)
    );

CREATE TABLE IF NOT EXISTS products (
                                        id BIGINT PRIMARY KEY AUTO_INCREMENT,
                                        name VARCHAR(255),
    price DECIMAL(10, 2),
    category_id BIGINT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
    );

CREATE TABLE IF NOT EXISTS customer_order (
                                              id BIGINT PRIMARY KEY AUTO_INCREMENT,
                                              order_number VARCHAR(255),
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES users(id)
    );

CREATE TABLE IF NOT EXISTS order_product (
                                             order_id BIGINT,
                                             product_id BIGINT,
                                             PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES customer_order(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
    );
