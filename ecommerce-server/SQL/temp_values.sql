-- --------------------------------------------------------
-- data for table `user_roles`

INSERT INTO `user_roles` (`role_id`, `role_name`) 
VALUES
(1, 'admin'),
(2, 'client'),
(3, 'seller');

-- --------------------------------------------------------
-- data for table `users`

INSERT INTO `users` (`password`, `first_name`, `last_name`, `email`, `address`, `telephone`, `profile_picture`, `role_id`, `registered_at`) VALUES
('12345', 'mustafa', 'ismail', 'mustafa1@gmail.com', 'sour', 70123456, 'NA', 1, '2020-1-1'),
('12345', 'Simon', 'ismail', 'simon@gmail.com', 'sour', 70125456, 'NA', 1, '2021-1-1'),
('8976', 'mohamad', 'kayali', 'mohamad3@gmail.com', 'beirut', 70898765, 'NA', 2, '2021-3-25'),
('111888', 'ahmad', 'moussa', 'ahamd3@gmail.com', 'jbeil', 70895321, 'NA', 2, '2022-9-1'),
('999666', 'fatima', 'kabalan', 'fkabalan1@gmail.com', 'meis', 70456311, 'NA', 3, '2022-5-12'),
('999666', 'Joe', 'kabalan', 'joe@gmail.com', 'meis', 70456311, 'NA', 3, '2022-7-12');

-- --------------------------------------------------------
-- data for table `products`

INSERT INTO `products` (`product_name`, `product_price`, `description`, `stock`, `viewing_count`, `seller_id`, `added_at`) VALUES
('Shampoo', 30, 'Best one yet.', 4, 1, 5, '2022-7-15'),
('Hand soap', 10, 'Best one yet.', 10, 11, 6, '2022-8-15');

-- --------------------------------------------------------
-- data for table `ads`

INSERT INTO `ads` (`product_id`, `ad_cost`) VALUES
(1, '100'),
(2, '70');

-- --------------------------------------------------------
-- data for table `bans`

INSERT INTO `bans` (`admin_id`, `user_id`) VALUES
(1, 3);

-- --------------------------------------------------------
-- data for table `carts`

INSERT INTO `carts` (`user_id`, `purchase_date`) VALUES
(3, '2022-09-17 16:13:09');

-- --------------------------------------------------------
-- data for table `products_in_carts`

INSERT INTO `products_in_carts` (`product_id`, `cart_id`) VALUES
(1, 1),
(2, 1);

-- --------------------------------------------------------
-- data for table `categories`

INSERT INTO `categories` (`category_id`, `category_name`, `seller_id`) VALUES
(1, 'hair products', 4),
(2, 'perfumes', 4);
-- --------------------------------------------------------
-- data for table `chats`

INSERT INTO `chats` (`client_user_id`, `seller_user_id`, `chat_text`, `date`) VALUES
(3, 5, 'hiiiii', '2022-09-23'),
(4, 5, 'hello', '2022-09-15');
-- --------------------------------------------------------
-- data for table `discounts`

INSERT INTO `discounts` (`active`, `percentage`, `seller_id`) VALUES
(1, 60, 5),
(0, 70, 5);
-- --------------------------------------------------------
-- data for table `favorite_products`

INSERT INTO `favorite_products` (`user_id`, `product_id`) VALUES
(3, 1),
(3, 2);

-- --------------------------------------------------------
-- data for table `product_categories`

INSERT INTO `product_categories` (`category_id`, `product_id`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------
-- data for table `vouchers`

INSERT INTO `vouchers` (`from_user_id`, `to_user_id`, `voucher_amount`) VALUES
(3, 4, '100');
-- --------------------------------------------------------
-- data for table `wishlists`

INSERT INTO `wishlists` (`product_id`, `user_id`) VALUES
(2, 4);
