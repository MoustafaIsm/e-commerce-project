<?php 

include("../connection.php");

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');

require __DIR__ . '/vendor/autoload.php';

// use Firebase\JWT\JWT;
// use Firebase\JWT\Key;

// $token = $_POST["token"];
// JWT::decode($token, new Key('fgh676', 'HS256'));


$seller_id = $_POST["seller_id"];

$query = "SELECT  *  FROM `discounts` WHERE discounts.seller_id = ? ORDER BY discounts.discount_id ASC";
$query1 = $mysqli->prepare($query);
$query1->bind_param("i", $seller_id);
$query1->execute();
$array = $query1->get_result();

$response = [];

while ($c = $array->fetch_assoc()) {
    $response[] = $c;
}
echo json_encode($response);

?>