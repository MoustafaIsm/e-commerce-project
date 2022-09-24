<?php

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include("../connection.php");

$product_id = $_POST["product_id"];
$user_id = $_POST["user_id"];

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$query = $mysqli -> prepare("DELETE FROM wishlists WHERE product_id = ? and user_id = ?");
$query -> bind_param("ii", $product_id, $user_id);
$query -> execute();


$response = [];
$response["success"] = true;

echo json_encode($response);


?>