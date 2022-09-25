<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$discount_code = $_POST["discount_code"];
$seller_id = $_POST["seller_id"];
$active = $_POST["active"];
$percentage = $_POST["percentage"];


// adding discount code
$query = "INSERT INTO `discounts`(`discount_code`, `active`, `percentage`, `seller_id`) VALUES (?,?,?,?) ";
$query1 = $mysqli->prepare($query);
$query1->bind_param("siii", $discount_code , $active , $percentage , $seller_id);
$query1->execute();


$response1["success"] = true;
echo json_encode($response1);

 ?>