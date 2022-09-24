<?php

include("../connection.php");

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
require __DIR__ . '/vendor/autoload.php';
$data = json_decode(file_get_contents("php://input"));

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token =  $data->token;
JWT::decode($token, new Key('fgh676', 'HS256'));


$query = "select DISTINCT u.*,  SUM(c.total_cost) as total_purchases, COUNT(p.product_id) as total_items
from users as u
INNER join bans as b on u.user_id = b.user_id
LEFT JOIN carts c ON c.user_id like b.user_id
LEFT JOIN products_in_carts p ON p.cart_id = c.cart_id
where u.role_id = 2
GROUP by u.user_id";
$query1 = $mysqli->prepare($query);

$query1->execute();
$array = $query1->get_result();

$response = [];

while ($c = $array->fetch_assoc()) {
    $response[] = $c;
}
echo json_encode($response);

?>
