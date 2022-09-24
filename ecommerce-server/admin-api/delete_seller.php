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


$user_id = $data->user_id;

$query = "DELETE FROM users where user_id= ? ";
$query1 = $mysqli->prepare($query);
$query1->bind_param("i", $user_id);
$query1->execute();


$response1["success"] = true;
echo json_encode($response1);

?>
