<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$category_name=$_POST["category_name"];
$product_name=$_POST["product_name"];


//getting the product id after inputing product's name 
$query1 = $mysqli->prepare("SELECT products.product_id FROM `products`  where product_name = ?");
$query1->bind_param("s", $product_name);
$query1->execute();
$result1 = $query1->get_result()->fetch_assoc()["product_id"];


// getting the catagory's id after inputing catagory's name
$query2 = $mysqli->prepare("SELECT categories.category_id FROM `categories`  where category_name = ? ");
$query2->bind_param("s",$category_name);
$query2->execute();
$result2 = $query2->get_result()->fetch_assoc()["category_id"];


//Bind the above results in one query and show it to the user
$query3 = $mysqli -> prepare("Insert INTO `product_categories`(`product_id`,`category_id`) VALUES (?,?)");
$query3->bind_param("ii" , $result1 , $result2);
$query3->execute();



$response1["success"] = true;
echo json_encode($response1);

 ?>
 