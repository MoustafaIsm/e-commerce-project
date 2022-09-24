<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));


$query = "select * from users as u where not exists (select user_id from bans as b where b.user_id = u.user_id) and u.role_id = 2";
$query1 = $mysqli->prepare($query);

$query1->execute();
$array = $query1->get_result();

$response = [];

while ($c = $array->fetch_assoc()) {
    $response[] = $c;
    
}
echo json_encode($response);

?>