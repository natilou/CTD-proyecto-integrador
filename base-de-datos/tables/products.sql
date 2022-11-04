CREATE TABLE
  `products` (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(45) NOT NULL,
    `category_id` int NOT NULL,
    `address` varchar(100) NOT NULL,
    `city_id` int NOT NULL,
    `description` longtext,
    PRIMARY KEY (`id`),
    UNIQUE KEY `id_UNIQUE` (`id`),
    KEY `products_category` (`category_id`),
    KEY `products_city` (`city_id`),
    CONSTRAINT `products_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
    CONSTRAINT `products_city` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 16 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci