CREATE TABLE
  `categories` (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(45) NOT NULL,
    `description` varchar(100) NOT NULL,
    `url_image` varchar(200) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `id_UNIQUE` (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci

  ALTER TABLE  `categories` ADD COLUMN `product_amount` bigint NOT NULL