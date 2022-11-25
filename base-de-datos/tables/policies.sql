CREATE TABLE
  `policies` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `description` varchar(255) NOT NULL,
    `product_id` int NOT NULL,
    `type_id` int NOT NULL,
    PRIMARY KEY (`id`),
    KEY `policies_relation_product` (`product_id`),
    KEY `policies_relation_type` (`type_id`),
    CONSTRAINT `policies_relation_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
    CONSTRAINT `policies_relation_type` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 15 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci