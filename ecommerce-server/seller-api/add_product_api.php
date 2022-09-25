<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$product_name = $_POST["product_name"];
$product_price = $_POST["product_price"];
$description = $_POST["description"];
$product_picture = $_POST["product_picture"];
$stock = $_POST["stock"];
$viewing_count = $_POST["viewing_count"];
$seller_id = $_POST["seller_id"];
$added_at = $_POST["added_at"];


// adding product
$query = "INSERT INTO `products`( `product_name`, `product_price`, `description`, `product_picture`, `stock`, `viewing_count`, `seller_id`, `added_at`) VALUES (?,?,?,?,?,?,?,?)";
$query1 = $mysqli->prepare($query);
$query1->bind_param("sissiiis",$product_name ,$product_price,$description, $product_picture,$stock, $viewing_count , $seller_id , $added_at);
$query1->execute();


$response1["success"] = true;
echo json_encode($response1);

 ?>