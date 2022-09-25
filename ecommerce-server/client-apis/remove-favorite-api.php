<?php

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include("../connection.php");

$user_id = $_POST["user_id"];
$product_id = $_POST["product_id"];

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$query = $mysqli -> prepare("DELETE FROM favorite_products WHERE `user_id` = ? and product_id = ?");
$query -> bind_param("ii", $user_id, $product_id);
$query -> execute();



$response = [];
$response["success"] = true;

echo json_encode($response);


?>