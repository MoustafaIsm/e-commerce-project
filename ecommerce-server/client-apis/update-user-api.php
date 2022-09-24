<?php

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$address = $_POST["address"];
$telephone = $_POST["telephone"];
$profile_picture = $_POST["profile_picture"];
$user_id = $_POST["user_id"];

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$query = $mysqli -> prepare("UPDATE users SET first_name = ?, last_name = ?, address = ?, telephone = ?, profile_picture = ? WHERE user_id = ?");
$query -> bind_param("sssssi", $first_name, $last_name, $address, $telephone, $profile_picture, $user_id);
$result = $query -> execute();

$response["result"] = $result;

echo json_encode($response);

?>