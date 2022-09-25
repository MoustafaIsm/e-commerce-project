<?php

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include("../connection.php");

$userId = $_POST["userId"];
$productId = $_POST["productId"];

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$query = $mysqli->prepare("INSERT INTO `wishlists`(`product_id`, `user_id`) VALUES (?,?)");
$query->bind_param("ii", $productId, $userId);
$query->execute();

$response["success"] = true;

echo json_encode($response);


?>