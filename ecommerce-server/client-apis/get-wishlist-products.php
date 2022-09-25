<?php

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include("../connection.php");

$user_id = $_POST["user_id"];

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));


$query = $mysqli->prepare("SELECT us.user_id, `product_name`, `product_price`, `description`, `stock`, `viewing_count`, p.`seller_id`, `added_at`, u.first_name, u.last_name, c.category_name
FROM `products` AS p INNER JOIN `product_categories` AS pc INNER JOIN `categories` AS c INNER JOIN `users` AS u INNER JOIN `wishlists` AS w INNER JOIN `users` AS us
ON p.product_id=pc.product_id AND pc.category_id=c.category_id AND c.seller_id=u.user_id AND w.product_id=p.product_id and us.user_id=w.user_id WHERE us.user_id=?");
$query->bind_param("i", $user_id);
$query -> execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;


?>