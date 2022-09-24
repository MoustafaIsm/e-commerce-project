-- Schema ecommercedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecommercedb` DEFAULT CHARACTER SET utf8 ;
USE `ecommercedb` ;

-- Table `ecommercedb`.`user_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`user_roles` (
  `role_id` INT NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`role_id`));

-- Table `ecommercedb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `telephone` INT NOT NULL,
  `profile_picture` MEDIUMTEXT NOT NULL,
  `role_id` INT NOT NULL,
  `registered_at` DATE NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_users_user_roles1`
    FOREIGN KEY (`role_id`)
    REFERENCES `ecommercedb`.`user_roles` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Table `ecommercedb`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`products` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(255) NOT NULL,
  `product_price` DECIMAL NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `product_picture` VARCHAR(255) NOT NULL,
  `stock` INT NOT NULL,
  `viewing_count` INT NOT NULL DEFAULT 0,
  `seller_id` INT NOT NULL,
  `added_at` DATE NULL,
  PRIMARY KEY (`product_id`),
  CONSTRAINT `fk_products_users1`
    FOREIGN KEY (`seller_id`)
    REFERENCES `ecommercedb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Table `ecommercedb`.`discounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`discounts` (
  `discount_id` INT NOT NULL AUTO_INCREMENT,
  `discount_code` VARCHAR(255) NOT NULL,
  `active` TINYINT(1) NULL DEFAULT 0,
  `percentage` INT NOT NULL,
  `seller_id` INT NOT NULL,
  PRIMARY KEY (`discount_id`),
  CONSTRAINT `fk_discounts_users1`
    FOREIGN KEY (`seller_id`)
    REFERENCES `ecommercedb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Table `ecommercedb`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`categories` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(255) NOT NULL,
  `seller_id` INT NOT NULL,
  PRIMARY KEY (`category_id`),
  CONSTRAINT `fk_categories_users1`
    FOREIGN KEY (`seller_id`)
    REFERENCES `ecommercedb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Table `ecommercedb`.`product_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`product_categories` (
  `category_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`category_id`, `product_id`),
  CONSTRAINT `fk_categories_has_products_categories1`
    FOREIGN KEY (`category_id`)
    REFERENCES `ecommercedb`.`categories` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_categories_has_products_products1`
    FOREIGN KEY (`product_id`)
    REFERENCES `ecommercedb`.`products` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Table `ecommercedb`.`wishlists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`wishlists` (
  `product_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`product_id`, `user_id`),
  CONSTRAINT `fk_products_has_users_products1`
    FOREIGN KEY (`product_id`)
    REFERENCES `ecommercedb`.`products` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_users_users2`
    FOREIGN KEY (`user_id`)
    REFERENCES `ecommercedb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Table `ecommercedb`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`carts` (
  `cart_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `purchase_date` DATE NOT NULL,
  PRIMARY KEY (`cart_id`),
  CONSTRAINT `fk_products_has_users_users3`
    FOREIGN KEY (`user_id`)
    REFERENCES `ecommercedb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Table `ecommercedb`.`bans`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`bans` (
  `admin_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`admin_id`, `user_id`),
  CONSTRAINT `fk_users_has_users_users1`
    FOREIGN KEY (`admin_id`)
    REFERENCES `ecommercedb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_users_users2`
    FOREIGN KEY (`user_id`)
    REFERENCES `ecommercedb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Table `ecommercedb`.`favorite_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`favorite_products` (
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `product_id`),
  CONSTRAINT `fk_users_has_products_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ecommercedb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_products_products1`
    FOREIGN KEY (`product_id`)
    REFERENCES `ecommercedb`.`products` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Table `ecommercedb`.`vouchers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`vouchers` (
  `from_user_id` INT NOT NULL,
  `to_user_id` INT NOT NULL,
  `voucher_amount` DECIMAL NULL,
  PRIMARY KEY (`from_user_id`, `to_user_id`),
  CONSTRAINT `fk_users_has_users_users3`
    FOREIGN KEY (`from_user_id`)
    REFERENCES `ecommercedb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_users_users4`
    FOREIGN KEY (`to_user_id`)
    REFERENCES `ecommercedb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Table `ecommercedb`.`chats`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`chats` (
  `client_user_id` INT NOT NULL,
  `seller_user_id` INT NOT NULL,
  `chat_text` MEDIUMTEXT NULL,
  `date` DATE NULL,
  PRIMARY KEY (`client_user_id`, `seller_user_id`),
  CONSTRAINT `fk_users_has_users_users5`
    FOREIGN KEY (`client_user_id`)
    REFERENCES `ecommercedb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_users_users6`
    FOREIGN KEY (`seller_user_id`)
    REFERENCES `ecommercedb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Table `ecommercedb`.`ads`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`ads` (
  `add_id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `ad_cost` DECIMAL NOT NULL,
  PRIMARY KEY (`add_id`),
  CONSTRAINT `fk_adds_products1`
    FOREIGN KEY (`product_id`)
    REFERENCES `ecommercedb`.`products` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Table `ecommercedb`.`products_in_carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedb`.`products_in_carts` (
  `product_id` INT NOT NULL,
  `cart_id` INT NOT NULL,
  PRIMARY KEY (`product_id`, `cart_id`),
  CONSTRAINT `fk_products_has_carts_products1`
    FOREIGN KEY (`product_id`)
    REFERENCES `ecommercedb`.`products` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_carts_carts1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `ecommercedb`.`carts` (`cart_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
ALTER TABLE `carts` ADD `total_cost` DOUBLE NOT NULL AFTER `purchase_date`;
