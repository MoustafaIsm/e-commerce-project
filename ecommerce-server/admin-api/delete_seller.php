<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));


$user_id = $_POST["user_id"];

$query = "DELETE FROM users where user_id= ? ";
$query1 = $mysqli->prepare($query);
$query1->bind_param("i", $user_id);
$query1->execute();


$response1["success"] = true;
echo json_encode($response1);

?>
