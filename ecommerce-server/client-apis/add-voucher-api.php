<?php

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include("../connection.php");

$from_user_id = $_POST["from_user_id"];
$to_user_id = $_POST["to_user_id"];
$voucher_amount = $_POST["voucher_amount"];

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$query = $mysqli->prepare("INSERT INTO `vouchers`(`from_user_id`, `to_user_id`, `voucher_amount`) VALUES (?, ?, ?)");
$query->bind_param("iii", $from_user_id, $to_user_id, $voucher_amount);
$query->execute();



$response = [];
$response["success"] = true;

echo json_encode($response);


?>