<?php

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include("../connection.php");

$product_id = $_POST["product_id"];

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$query = $mysqli->prepare("SELECT p.`product_id`, `product_name`, `product_picture`,`product_price`, `description`, `stock`, `viewing_count`, p.`seller_id`, `added_at`, u.first_name, u.last_name, c.category_name FROM `products` AS p INNER JOIN `users` AS u INNER JOIN `product_categories` AS pc INNER JOIN `categories` AS c ON p.seller_id=u.user_id AND p.product_id=pc.product_id AND pc.category_id=c.category_id WHERE p.product_id=?");
$query->bind_param("i", $product_id);
$query -> execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;


?>