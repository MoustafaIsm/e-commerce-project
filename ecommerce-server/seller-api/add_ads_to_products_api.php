<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$product_id = $_POST["product_id"];
$ad_cost = $_POST["ad_cost"];

// adding ad  
$query1 = $mysqli->prepare("INSERT INTO `ads`( `product_id`, `ad_cost`) VALUES (?,?)");
$query1->bind_param("ii", $product_id , $ad_cost);
$query1->execute();


$response1["success"] = true;
echo json_encode($response1);


?>