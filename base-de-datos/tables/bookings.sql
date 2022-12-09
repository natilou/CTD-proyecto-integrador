CREATE TABLE
  `bookings` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `initial_hour` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `initial_date` datetime NOT NULL,
    `end_date` datetime NOT NULL,
    `product_id` int NOT NULL,
    `user_id` int NOT NULL,
    PRIMARY KEY (`id`),
    KEY `bookings_product` (`product_id`),
    KEY `bookings_user` (`user_id`),
    CONSTRAINT `bookings_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
    CONSTRAINT `bookings_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci


ALTER TABLE 0521PTC6N2db_GRUPO10.bookings DROP FOREIGN KEY bookings_product;
ALTER TABLE 0521PTC6N2db_GRUPO10.bookings ADD CONSTRAINT bookings_product FOREIGN KEY (product_id) REFERENCES 0521PTC6N2db_GRUPO10.products(id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE 0521PTC6N2db_GRUPO10.bookings DROP FOREIGN KEY bookings_user;
ALTER TABLE 0521PTC6N2db_GRUPO10.bookings ADD CONSTRAINT bookings_user FOREIGN KEY (user_id) REFERENCES 0521PTC6N2db_GRUPO10.users(id) ON DELETE CASCADE ON UPDATE RESTRICT;
