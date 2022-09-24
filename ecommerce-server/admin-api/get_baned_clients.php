<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));


$query = "select u.user_id, u.first_name, u.last_name, u.email, u.address, u.profile_picture,  SUM(c.total_cost) as total_purchases, COUNT(p.product_id) as total_items
from users as u
INNER JOIN carts c ON c.user_id like u.user_id
INNER JOIN products_in_carts p ON p.cart_id = c.cart_id
inner join bans as b on u.user_id = b.user_id where u.role_id = 2";
$query1 = $mysqli->prepare($query);

$query1->execute();
$array = $query1->get_result();

$response = [];

while ($c = $array->fetch_assoc()) {
    $response[] = $c;
}
echo json_encode($response);

?>
