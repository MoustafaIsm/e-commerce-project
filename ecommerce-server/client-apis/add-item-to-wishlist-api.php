<?php

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include("../connection.php");

$product_name = $_POST["product_name"];
$product_price = $_POST["product_price"];
$description = $_POST["description"];
$stock = $_POST["stock"];
$viewing_count = $_POST["viewing_count"];
$seller_id = $_POST["seller_id"];
$added_at = $_POST["added_at"];

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$query = $mysqli->prepare("INSERT INTO `products`(`product_name`, `product_price`, `description`, `stock`, `viewing_count`, `seller_id`, `added_at`) VALUES (?, ?, ?, ?, ?, ?, ?)");
$query->bind_param("sisiiis", $product_name, $product_price, $description, $stock, $viewing_count, $seller_id, $added_at);
$query->execute();


$response = [];
$response["success"] = true;

echo json_encode($response);


?>