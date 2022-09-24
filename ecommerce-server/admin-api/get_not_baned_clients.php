<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));


$query = "select DISTINCT u.*, SUM(c.total_cost) as total_purchases, COUNT(p.product_id) as total_items
from users u
INNER JOIN carts c ON c.user_id like u.user_id
INNER JOIN products_in_carts p ON p.cart_id = c.cart_id
where not exists (select user_id from bans as b where b.user_id = u.user_id) and u.role_id = 2
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
