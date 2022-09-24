<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$category_name=$_POST["category_name"];
$seller_id=$_POST["seller_id"];

// adding category by entering the seller id and the name of this category
$query = "INSERT INTO `categories`(`category_name`, `seller_id`) VALUES (?,?)";
$query1 = $mysqli->prepare($query);
$query1->bind_param("si",$category_name,$seller_id);
$query1->execute();


$response1["success"] = true;
echo json_encode($response1);

 ?>