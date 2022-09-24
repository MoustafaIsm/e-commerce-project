<?php

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include("../connection.php");

$client_user_id = $_POST["client_user_id"];
$seller_user_id = $_POST["seller_user_id"];
$chat_text = $_POST["chat_text"];
$date = $_POST["date"];

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$query = $mysqli->prepare("INSERT INTO `chats`(`client_user_id`, `seller_user_id`, `chat_text`, `date`) VALUES (?, ?, ?, ?)");
$query->bind_param("iiss", $client_user_id, $seller_user_id, $chat_text, $date);
$query->execute();



$response = [];
$response["success"] = true;

echo json_encode($response);


?>