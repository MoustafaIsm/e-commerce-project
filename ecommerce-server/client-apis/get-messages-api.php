<?php

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include("../connection.php");

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$userId = $_POST["userId"];

$query = $mysqli->prepare("SELECT * FROM `chats` WHERE client_user_id=?");
$query->bind_param("i", $userId);
$query -> execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;


?>