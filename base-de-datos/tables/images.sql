CREATE TABLE
  `images` (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(45) DEFAULT NULL,
    `url` varchar(250) NOT NULL,
    `product_id` int DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `fk_images_product_idx` (`product_id`),
    CONSTRAINT `images_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 13 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci