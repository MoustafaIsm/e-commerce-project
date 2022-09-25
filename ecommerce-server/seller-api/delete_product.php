<?php 

include("../connection.php");

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));


$product_id = $_POST["product_id"];

// deleting product from ads section 
$query1 = $mysqli->prepare("DELETE FROM `ads` WHERE ads.product_id = ?");
$query1->bind_param("i", $product_id);
$query1->execute();


// deleting product from carts 
$query2 = $mysqli->prepare("DELETE FROM `products_in_carts` WHERE products_in_carts.product_id = ? ");
$query2->bind_param("i", $product_id);
$query2->execute();


// deleting product from category
$query3 = $mysqli->prepare("DELETE FROM `product_categories` WHERE product_categories.product_id = ? ");
$query3->bind_param("i", $product_id);
$query3->execute();


// deleting product from favorites
$query4 = $mysqli->prepare("DELETE FROM `favorite_products` WHERE favorite_products.product_id = ?");
$query4->bind_param("i", $product_id);
$query4->execute();


// deleting product from wishlist
$query5 = $mysqli->prepare("DELETE FROM `wishlists` WHERE wishlists.product_id = ?");
$query5->bind_param("i", $product_id);
$query5->execute();


// deleting product from products section 
$query1 = $mysqli->prepare("DELETE FROM `products` WHERE products.product_id = ?");
$query1->bind_param("i", $product_id);
$query1->execute();


$response1["success"] = true;
echo json_encode($response1);

?>
