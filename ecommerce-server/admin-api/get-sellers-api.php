<?php

include("../connection.php");

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
require __DIR__ . '/vendor/autoload.php';
$data = json_decode(file_get_contents("php://input"));
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $data->token;
JWT::decode($token, new Key('fgh676', 'HS256'));


$query = "SELECT DISTINCT u.*, COUNT(DISTINCT p.product_id) as totalitems, COUNT(pr.product_id) as totalcustomers
FROM users u
LEFT JOIN products p ON u.user_id like p.seller_id
LEFT JOIN products_in_carts pr on pr.product_id like p.product_id
where u.role_id like 3
GROUP BY u.user_id


";
$query1 = $mysqli->prepare($query);

$query1->execute();
$array = $query1->get_result();

$response = [];

while ($c = $array->fetch_assoc()) {
    $response[] = $c;
}
echo json_encode($response);

?>
