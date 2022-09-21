-- --------------------------------------------------------
-- data for table `ads`
--
INSERT INTO `ads` (`add_id`, `product_id`, `ad_cost`) VALUES
(1, 1, '100'),
(2, 2, '70');
-- --------------------------------------------------------
-- data for table `bans`

INSERT INTO `bans` (`admin_id`, `user_id`) VALUES
(1, 2),
(1, 5);
-- --------------------------------------------------------
-- data for table `carts`

INSERT INTO `carts` (`cart_id`, `product_id`, `user_id`, `purchase_date`) VALUES
(1, 1, 2, '2022-09-17 16:13:09');

-- --------------------------------------------------------
-- data for table `categories`

INSERT INTO `categories` (`category_id`, `category_name`, `seller_id`) VALUES
(1, 'hair products', 4),
(2, 'perfumes', 4);
-- --------------------------------------------------------
-- data for table `chats`

INSERT INTO `chats` (`client_user_id`, `seller_user_id`, `chat_text`, `date`) VALUES
(2, 4, 'hiiiii', '2022-09-23'),
(5, 4, 'hello', '2022-09-15');
-- --------------------------------------------------------
-- data for table `discounts`

INSERT INTO `discounts` (`discount_id`, `active`, `percentage`, `seller_id`) VALUES
(1, 1, 60, 4),
(2, 0, 70, 4);
-- --------------------------------------------------------
-- data for table `favorite_products`

INSERT INTO `favorite_products` (`user_id`, `product_id`) VALUES
(2, 1),
(5, 2);
-- --------------------------------------------------------
-- data for table `products`

INSERT INTO `products` (`product_id`, `product_name`, `product_price`, `description`, `product_quantity`, `sponsered`, `stock`, `viewing_count`) VALUES
(1, 'shampoo', '18', 'for dry hair', 2, 'elvive', 6, 0),
(2, 'perfum', '13', 'nice scent', 8, 'far away', 7, 0);
-- --------------------------------------------------------
-- data for table `product_categories`

INSERT INTO `product_categories` (`category_id`, `product_id`) VALUES
(1, 1),
(2, 2);
-- --------------------------------------------------------
-- data for table `users`

INSERT INTO `users` (`user_id`, `password`, `first_name`, `last_name`, `email`, `address`, `telephone`, `profile_picture`, `role_id`) VALUES
(1, '12345', 'mustafa', 'ismail', 'mustafa1@gmail.com', 'sour', 70123456, 'jpg', 1),
(2, '8976', 'mohamad', 'kayali', 'mohamad3@gmail.com', 'beirut', 70898765, 'png', 2),
(4, '999666', 'fatima', 'kabalan', 'fkabalan1@gmail.com', 'meis', 70456311, 'jpg', 3),
(5, '111888', 'ahmad', 'moussa', 'ahamd3@gmail.com', 'jbeil', 70895321, 'jpg', 2);
-- --------------------------------------------------------
-- data for table `user_roles`

INSERT INTO `user_roles` (`role_id`, `role_name`) VALUES
(1, 'admin'),
(2, 'client'),
(3, 'seller');
-- --------------------------------------------------------
-- data for table `vouchers`

INSERT INTO `vouchers` (`from_user_id`, `to_user_id`, `voucher_amount`) VALUES
(2, 5, '100');
-- --------------------------------------------------------
-- data for table `wishlists`

INSERT INTO `wishlists` (`product_id`, `user_id`) VALUES
(2, 2);
