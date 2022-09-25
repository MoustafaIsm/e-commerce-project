<?php

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include("../connection.php");

$product_id = $_POST["product_id"];
// $viewing_count = $_POST["viewing_count"];

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$query = $mysqli->prepare("SELECT `viewing_count` FROM `products` WHERE `product_id`=?");
$query->bind_param("i", $product_id);
$query -> execute();
$result = $query->get_result()->fetch_assoc()["viewing_count"];
$result++;

$query1 = $mysqli->prepare("UPDATE `products` SET `viewing_count`=? WHERE `product_id`=?");
$query1->bind_param("ii", $result, $product_id);
$query1 -> execute();
$result1 = $query1->get_result();

$response["result"] = $result1;

$json = json_encode($response);
echo $json;

?>

