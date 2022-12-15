CREATE TABLE
  `products` (
    `id` int NOT NULL,
    `address` varchar(255) DEFAULT NULL,
    `description` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
    `title` varchar(255) DEFAULT NULL,
    `category_id` int NOT NULL,
    `city_id` int NOT NULL,
    `cover_image_url` varchar(255) NOT NULL,
    `user_id` int NOT NULL,
    PRIMARY KEY (`id`),
    KEY `products_city` (`city_id`),
    KEY `products_category` (`category_id`),
    KEY `products_admin_user` (`user_id`),
    CONSTRAINT `products_admin_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
    CONSTRAINT `products_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
    CONSTRAINT `products_city` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci
