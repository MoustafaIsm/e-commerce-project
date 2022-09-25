<?php

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include("../connection.php");

$from_user_id = $_POST["from_user_id"];
$to_user_email = $_POST["to_user_email"];
$voucher_amount = $_POST["voucher_amount"];

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$query1 = $mysqli->prepare("SELECT user_id FROM users WHERE email=?");
$query1->bind_param("s", $to_user_email);
$query1->execute();
$result = $query1->get_result();
$userId = $result->fetch_assoc()["user_id"];

$query = $mysqli->prepare("INSERT INTO `vouchers`(`from_user_id`, `to_user_id`, `voucher_amount`) VALUES (?, ?, ?)");
$query->bind_param("iii", $from_user_id, $userId, $voucher_amount);
$query->execute();



$response = [];
$response["success"] = true;

echo json_encode($response);


?>