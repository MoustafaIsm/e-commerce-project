<?php 

include("../connection.php");

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$seller_id = $_POST["seller_id"];
$product_id = $_POST["product_id"];
$prduct_name = $_POST["product_name"];
$prduct_price = $_POST["product_price"];
$description = $_POST["description"];
$stock = $_POST["stock"];
$added_at = $_POST["added_at"];
$viewing_count = $_POST["viewing_count"];
$product_picture = $_POST["product_picture"];

$query = "UPDATE `products` SET  `product_name` = ? ,`product_price` = ? ,`description` = ? ,`stock` = ?,`added_at` = ? ,`viewing_count`= ? , `product_picture` = ? where products.product_id = ? and products.seller_id = ?";
$query1 = $mysqli->prepare($query);
$query1->bind_param("sisisiii", $prduct_name , $prduct_price , $description , $stock , $added_at , $viewing_count , $product_picture , $product_id , $seller_id);
$query1->execute();

$response1["success"] = true;
echo json_encode($response1);

?>