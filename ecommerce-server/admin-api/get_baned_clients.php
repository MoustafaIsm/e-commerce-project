<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_GET["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));


$query = "select u.user_id, u.first_name, u.last_name, u.email, u.address, u.profile_picture from users as u inner join bans as b on u.user_id = b.user_id where u.role_id = 2";
$query1 = $mysqli->prepare($query);

$query1->execute();
$array = $query1->get_result();

$response = [];

while ($c = $array->fetch_assoc()) {
    $response[] = $c;
}
echo json_encode($response);

?>