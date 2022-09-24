<?php

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include("../connection.php");

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$query = $mysqli->prepare("SELECT p.product_id, p.product_name, u.first_name, u.last_name, c.category_name, p.stock, p.product_price FROM `products` AS p INNER JOIN `product_categories` AS pc INNER JOIN `categories` AS c INNER JOIN `users` AS u ON p.product_id=pc.product_id AND pc.category_id=c.category_id AND c.seller_id=u.user_id");
$query -> execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;


?>