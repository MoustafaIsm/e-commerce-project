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
$query = "DELETE FROM users WHERE user_id=?";
$stmt = $mysqli->prepare($query);
$stmt->bind_param('i', $user_id);

if($stmt->execute()){
  $response1["success"] = true;
}
else{
  $response1["success"] = false;
  $response1["id"] = $user_id;
}

echo json_encode($response1);

?>
