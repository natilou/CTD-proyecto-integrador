CREATE TABLE
  `products_features` (
    `id` int NOT NULL AUTO_INCREMENT,
    `product_id` int NOT NULL,
    `feature_id` int NOT NULL,
    PRIMARY KEY (`id`),
    KEY `products_features_relation_feature` (`feature_id`),
    KEY `products_features_relation_product` (`product_id`),
    CONSTRAINT `products_feature` FOREIGN KEY (`feature_id`) REFERENCES `features` (`id`),
    CONSTRAINT `products_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 21 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci