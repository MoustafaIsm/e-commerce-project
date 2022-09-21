-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2022 at 04:04 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
--
-- Database: `ecommercedb`
--
-- --------------------------------------------------------
-- users data for table `ads`
--
INSERT INTO `ads` (`add_id`, `product_id`, `ad_cost`) VALUES
(1, 1, '100'),
(2, 2, '70');
-- --------------------------------------------------------
-- users data for table `bans`
--
INSERT INTO `bans` (`admin_id`, `user_id`) VALUES
(1, 2),
(1, 5);
-- --------------------------------------------------------
-- users data for table `carts`
--
INSERT INTO `carts` (`cart_id`, `product_id`, `user_id`, `purchase_date`) VALUES
(1, 1, 2, '2022-09-17 16:13:09');

-- --------------------------------------------------------
-- users data for table `categories`
--
INSERT INTO `categories` (`category_id`, `category_name`, `seller_id`) VALUES
(1, 'hair products', 4),
(2, 'perfumes', 4);
-- --------------------------------------------------------
-- users data for table `chats`
--
INSERT INTO `chats` (`client_user_id`, `seller_user_id`, `chat_text`, `date`) VALUES
(2, 4, 'hiiiii', '2022-09-23'),
(5, 4, 'hello', '2022-09-15');
-- --------------------------------------------------------
-- users data for table `discounts`
--
INSERT INTO `discounts` (`discount_id`, `active`, `percentage`, `seller_id`) VALUES
(1, 1, 60, 4),
(2, 0, 70, 4);
-- --------------------------------------------------------
-- users data for table `favorite_products`
--
INSERT INTO `favorite_products` (`user_id`, `product_id`) VALUES
(2, 1),
(5, 2);
-- --------------------------------------------------------
-- users data for table `products`
--
INSERT INTO `products` (`product_id`, `product_name`, `product_price`, `description`, `product_quantity`, `sponsered`, `stock`, `viewing_count`) VALUES
(1, 'shampoo', '18', 'for dry hair', 2, 'elvive', 6, 0),
(2, 'perfum', '13', 'nice scent', 8, 'far away', 7, 0);
-- --------------------------------------------------------
-- users data for table `product_categories`
--
INSERT INTO `product_categories` (`category_id`, `product_id`) VALUES
(1, 1),
(2, 2);
-- --------------------------------------------------------
-- users data for table `users`
--
INSERT INTO `users` (`user_id`, `password`, `first_name`, `last_name`, `email`, `address`, `telephone`, `profile_picture`, `role_id`) VALUES
(1, '12345', 'mustafa', 'ismail', 'mustafa1@gmail.com', 'sour', 70123456, 'jpg', 1),
(2, '8976', 'mohamad', 'kayali', 'mohamad3@gmail.com', 'beirut', 70898765, 'png', 2),
(4, '999666', 'fatima', 'kabalan', 'fkabalan1@gmail.com', 'meis', 70456311, 'jpg', 3),
(5, '111888', 'ahmad', 'moussa', 'ahamd3@gmail.com', 'jbeil', 70895321, 'jpg', 2);
-- --------------------------------------------------------
-- users data for table `user_roles`
--
INSERT INTO `user_roles` (`role_id`, `role_name`) VALUES
(1, 'admin'),
(2, 'client'),
(3, 'seller');
-- --------------------------------------------------------
-- users data for table `vouchers`
--
INSERT INTO `vouchers` (`from_user_id`, `to_user_id`, `voucher_amount`) VALUES
(2, 5, '100');
-- --------------------------------------------------------
-- users data for table `wishlists`
--
INSERT INTO `wishlists` (`product_id`, `user_id`) VALUES
(2, 2);
--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`add_id`),
  ADD KEY `fk_adds_products1` (`product_id`);
--
-- Indexes for table `bans`
--
ALTER TABLE `bans`
  ADD PRIMARY KEY (`admin_id`,`user_id`),
  ADD KEY `fk_users_has_users_users2` (`user_id`);
--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `fk_products_has_users_products2` (`product_id`),
  ADD KEY `fk_products_has_users_users3` (`user_id`);
--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`),
  ADD KEY `fk_categories_users1` (`seller_id`);
--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`client_user_id`,`seller_user_id`),
  ADD KEY `fk_users_has_users_users6` (`seller_user_id`);
--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`discount_id`),
  ADD KEY `fk_discounts_users1` (`seller_id`);
--
-- Indexes for table `favorite_products`
--
ALTER TABLE `favorite_products`
  ADD PRIMARY KEY (`user_id`,`product_id`),
  ADD KEY `fk_users_has_products_products1` (`product_id`);
--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);
--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`category_id`,`product_id`),
  ADD KEY `fk_categories_has_products_products1` (`product_id`);
--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `fk_users_user_roles1` (`role_id`);
--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`role_id`);
--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`from_user_id`,`to_user_id`),
  ADD KEY `fk_users_has_users_users4` (`to_user_id`);
--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`product_id`,`user_id`),
  ADD KEY `fk_products_has_users_users2` (`user_id`);
--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `add_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `discount_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for table `ads`
--
ALTER TABLE `ads`
  ADD CONSTRAINT `fk_adds_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
--
-- Constraints for table `bans`
--
ALTER TABLE `bans`
  ADD CONSTRAINT `fk_users_has_users_users1` FOREIGN KEY (`admin_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_users_users2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `fk_products_has_users_products2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_products_has_users_users3` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `fk_categories_users1` FOREIGN KEY (`seller_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
--
-- Constraints for table `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `fk_users_has_users_users5` FOREIGN KEY (`client_user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_users_users6` FOREIGN KEY (`seller_user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
--
-- Constraints for table `discounts`
--
ALTER TABLE `discounts`
  ADD CONSTRAINT `fk_discounts_users1` FOREIGN KEY (`seller_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
--
-- Constraints for table `favorite_products`
--
ALTER TABLE `favorite_products`
  ADD CONSTRAINT `fk_users_has_products_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_products_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
--
-- Constraints for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD CONSTRAINT `fk_categories_has_products_categories1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_categories_has_products_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_user_roles1` FOREIGN KEY (`role_id`) REFERENCES `user_roles` (`role_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
--
-- Constraints for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD CONSTRAINT `fk_users_has_users_users3` FOREIGN KEY (`from_user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_users_users4` FOREIGN KEY (`to_user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
--
-- Constraints for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD CONSTRAINT `fk_products_has_users_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_products_has_users_users2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
