DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Heather Gray Sweater", "Tops", 50, 1),
  ("High Waisted Jeans", "Pants", 70, 1),
  ("Leather Sandals", "Shoes", 30, 2),
  ("White Blouse", "Tops", 25, 1),
  ("Gold Necklace", "Accessories", 50, 4),
  ("Black Loafers", "Shoes", 45, 1),
  ("Fjallraven Kanken Bag", "Accessories", 35, 2),
  ("Denim Jacket", "Outerwear", 60, 2),
  ("Camel Coat", "Outerwear", 150, 1),
  ("Gingham Shorts", "Bottoms", 15, 1);
