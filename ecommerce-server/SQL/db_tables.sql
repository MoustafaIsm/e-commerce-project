-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2022 at 10:24 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

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

--
-- Table structure for table `ads`
--

CREATE TABLE `ads` (
  `add_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `ad_cost` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ads`
--

INSERT INTO `ads` (`add_id`, `product_id`, `ad_cost`) VALUES
(1, 1, '100'),
(2, 2, '70'),
(3, 2, '20'),
(4, 15, '15'),
(5, 6, '45'),
(6, 4, '44'),
(7, 12, '80'),
(8, 13, '21'),
(9, 14, '87');

-- --------------------------------------------------------

--
-- Table structure for table `bans`
--

CREATE TABLE `bans` (
  `admin_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bans`
--

INSERT INTO `bans` (`admin_id`, `user_id`) VALUES
(1, 3),
(1, 4),
(2, 3),
(2, 8),
(3, 10);

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `purchase_date` date NOT NULL,
  `total_cost` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`cart_id`, `user_id`, `purchase_date`, `total_cost`) VALUES
(1, 3, '2022-09-17', 100),
(2, 1, '2022-09-07', 45),
(3, 2, '2022-09-08', 85),
(4, 3, '2022-09-07', 77),
(5, 4, '2022-09-19', 87),
(6, 5, '2022-09-23', 97),
(7, 6, '2022-09-06', 124),
(8, 7, '2022-09-14', 32),
(9, 8, '2022-09-20', 112);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `seller_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `seller_id`) VALUES
(1, 'hair products', 4),
(2, 'perfumes', 4),
(3, 'cars', 6),
(4, 'food', 6),
(5, 'cosmetics', 7),
(6, 'candy', 11),
(7, 'shoes', 8),
(8, 'wood', 4);

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `chat_id` int(11) NOT NULL,
  `client_user_id` int(11) NOT NULL,
  `seller_user_id` int(11) NOT NULL,
  `chat_text` mediumtext DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`chat_id`, `client_user_id`, `seller_user_id`, `chat_text`, `date`) VALUES
(1, 3, 5, 'hiiiii', '2022-09-23'),
(2, 4, 5, 'hello', '2022-09-15'),
(3, 9, 2, 'working fine', '2022-09-19'),
(4, 1, 8, 'its not working', '2022-09-09'),
(5, 2, 4, 'there is a bug', '2022-09-26'),
(6, 9, 11, 'best product', '2022-09-15');

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `discount_id` int(11) NOT NULL,
  `discount_code` varchar(255) NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `percentage` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `discounts`
--

INSERT INTO `discounts` (`discount_id`, `discount_code`, `active`, `percentage`, `seller_id`) VALUES
(1, 'ABCD123', 1, 60, 5),
(2, '123ABCD', 0, 70, 5),
(3, 'khj', 0, 50, 5),
(4, '15mnn', 1, 20, 4),
(5, 'kjh10', 0, 10, 7),
(6, 'asd0', 0, 15, 12),
(7, 'ss02', 1, 12, 10),
(8, '30ssc', 0, 30, 8);

-- --------------------------------------------------------

--
-- Table structure for table `favorite_products`
--

CREATE TABLE `favorite_products` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `favorite_products`
--

INSERT INTO `favorite_products` (`user_id`, `product_id`) VALUES
(1, 6),
(2, 16),
(3, 1),
(3, 2),
(3, 6),
(4, 12),
(7, 1),
(8, 15),
(9, 4),
(10, 5),
(11, 13),
(12, 14);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` decimal(10,0) NOT NULL,
  `description` varchar(255) NOT NULL,
  `product_picture` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `viewing_count` int(11) NOT NULL DEFAULT 0,
  `seller_id` int(11) NOT NULL,
  `added_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_price`, `description`, `product_picture`, `stock`, `viewing_count`, `seller_id`, `added_at`) VALUES
(1, 'Shampoo', '30', 'Best one yet.', 'NA', 4, 1, 5, '2022-07-15'),
(2, 'Hand soap', '10', 'Best one yet.', 'NA', 10, 11, 6, '2022-08-15'),
(4, 'eKids', '50', 'Best one yet.', 'jhgg', 50, 0, 2, '2022-09-20'),
(5, 'dyson', '10', 'Best one yet.', 'jhgg', 70, 6, 4, '2022-09-15'),
(6, 'iHome', '60', 'Best one yet.', 'jhvd', 2, 1, 5, '2022-09-09'),
(12, 'sony', '25', 'Best one yet.', 'ssss', 90, 0, 4, '2022-09-28'),
(13, 'danica', '42', 'Best one yet.', 'jh', 90, 0, 7, '2022-09-12'),
(14, 'zoku', '12', 'Best one yet.', 'mn', 85, 0, 12, '2022-09-28'),
(15, 'tomtom', '34', 'Best one yet.', '', 18, 50, 2, '2022-09-06'),
(16, 'KaZam', '16', 'Best one yet.', '', 7, 0, 10, '2022-09-06');

-- --------------------------------------------------------

--
-- Table structure for table `products_in_carts`
--

CREATE TABLE `products_in_carts` (
  `product_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products_in_carts`
--

INSERT INTO `products_in_carts` (`product_id`, `cart_id`) VALUES
(1, 1),
(1, 7),
(2, 1),
(2, 5),
(4, 4),
(5, 3),
(6, 6),
(12, 6),
(12, 9),
(13, 2),
(15, 4),
(16, 8);

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`category_id`, `product_id`) VALUES
(1, 1),
(1, 15),
(2, 2),
(2, 13),
(3, 2),
(3, 16),
(5, 12),
(5, 15),
(6, 13),
(8, 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `telephone` int(11) NOT NULL,
  `profile_picture` mediumtext NOT NULL,
  `role_id` int(11) NOT NULL,
  `registered_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `password`, `first_name`, `last_name`, `email`, `address`, `telephone`, `profile_picture`, `role_id`, `registered_at`) VALUES
(1, '12345', 'mustafa', 'ismail', 'mustafa1@gmail.com', 'sour', 70123456, 'NA', 1, '2020-01-01'),
(2, '12345', 'Simon', 'ismail', 'simon@gmail.com', 'sour', 70125456, 'NA', 1, '2021-01-01'),
(3, '8976', 'mohamad', 'kayali', 'mohamad3@gmail.com', 'beirut', 70898765, 'NA', 2, '2021-03-25'),
(4, '111888', 'ahmad', 'moussa', 'ahamd3@gmail.com', 'jbeil', 70895321, 'NA', 2, '2022-09-01'),
(5, '999666', 'fatima', 'kabalan', 'fkabalan1@gmail.com', 'meis', 70456311, 'NA', 3, '2022-05-12'),
(6, '999666', 'Joe', 'kabalan', 'joe@gmail.com', 'meis', 70456311, 'NA', 3, '2022-07-12'),
(7, '15482h', 'Samir', 'Madi', 'samir.madi@gmail.com', 'beirut', 75125486, 'fhjhjfksdjhfsld', 1, '2022-09-21'),
(8, 'jd5dsj', 'Ahmad', 'Hamod', 'ahmad.hamod@gmail.com', 'saida', 95145236, 'fhbhgdfhgdfhjd', 2, '2022-09-11'),
(9, '45rgf', 'Ali', 'Ismail', 'ali.ismail@gmail.com', 'Sour', 48521793, 'lkndsfkjsdnkjsd', 3, '2022-09-21'),
(10, '8d8dsd21d', 'Sara', 'Ali', 'sara.ali@gmail.com', 'Aramoun', 41521489, 'jdkasda', 2, '2022-09-24'),
(11, '5s5d8f4s', 'George', 'Cherfane', 'George.Cherfane@gmail.com', 'Achrafieh', 15246872, 'kcdks', 2, '2022-09-15'),
(12, 's5s5dskd', 'Lina', 'Ghali', 'lina.ghali@gmail.com', 'dbayeh', 48521365, 'jdjdss', 3, '2022-09-19');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`role_id`, `role_name`) VALUES
(1, 'admin'),
(2, 'client'),
(3, 'seller');

-- --------------------------------------------------------

--
-- Table structure for table `vouchers`
--

CREATE TABLE `vouchers` (
  `from_user_id` int(11) NOT NULL,
  `to_user_id` int(11) NOT NULL,
  `voucher_amount` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vouchers`
--

INSERT INTO `vouchers` (`from_user_id`, `to_user_id`, `voucher_amount`) VALUES
(1, 7, '80'),
(2, 10, '154'),
(3, 4, '100'),
(5, 1, '112'),
(5, 12, '45'),
(9, 11, '325'),
(10, 1, '54'),
(10, 3, '54'),
(10, 5, '44'),
(11, 10, '10'),
(12, 8, '90');

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wishlists`
--

INSERT INTO `wishlists` (`product_id`, `user_id`) VALUES
(1, 12),
(2, 4),
(2, 10),
(4, 10),
(6, 1),
(6, 2),
(13, 3),
(13, 10),
(14, 10),
(15, 4),
(16, 4);

--
-- Indexes for dumped tables
--

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
  ADD PRIMARY KEY (`chat_id`),
  ADD KEY `fk_users_has_users_users5` (`client_user_id`),
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
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `fk_products_users1` (`seller_id`);

--
-- Indexes for table `products_in_carts`
--
ALTER TABLE `products_in_carts`
  ADD PRIMARY KEY (`product_id`,`cart_id`),
  ADD KEY `fk_products_has_carts_carts1` (`cart_id`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `add_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `discount_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ads`
--
ALTER TABLE `ads`
  ADD CONSTRAINT `fk_adds_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bans`
--
ALTER TABLE `bans`
  ADD CONSTRAINT `fk_users_has_users_users1` FOREIGN KEY (`admin_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_users_has_users_users2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `fk_products_has_users_users3` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `fk_categories_users1` FOREIGN KEY (`seller_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `fk_users_has_users_users5` FOREIGN KEY (`client_user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_users_has_users_users6` FOREIGN KEY (`seller_user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `discounts`
--
ALTER TABLE `discounts`
  ADD CONSTRAINT `fk_discounts_users1` FOREIGN KEY (`seller_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `favorite_products`
--
ALTER TABLE `favorite_products`
  ADD CONSTRAINT `fk_users_has_products_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_users_has_products_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_products_users1` FOREIGN KEY (`seller_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products_in_carts`
--
ALTER TABLE `products_in_carts`
  ADD CONSTRAINT `fk_products_has_carts_carts1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`cart_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_products_has_carts_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD CONSTRAINT `fk_categories_has_products_categories1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_categories_has_products_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_user_roles1` FOREIGN KEY (`role_id`) REFERENCES `user_roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD CONSTRAINT `fk_users_has_users_users3` FOREIGN KEY (`from_user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_users_has_users_users4` FOREIGN KEY (`to_user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD CONSTRAINT `fk_products_has_users_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_products_has_users_users2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
