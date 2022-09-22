<?php

include("connection.php");

$password = hash("sha256", $_POST["password"]);
$password .= "a";
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$address = $_POST["address"];
$telephone = $_POST["telephone"];
$profile_picture = $_POST["profile_picture"];
$email = $_POST["email"];

$query = $mysqli -> prepare("UPDATE users SET password = ?, first_name = ?, last_name = ?, address = ?, telephone = ?, profile_picture = ? WHERE email = ?");
$query -> bind_param("sssssssi", $password, $first_name, $last_name, $address, $telephone, $profile_picture, $email);
$query -> execute();

$response = [];
$response["success"] = true;

echo json_encode($response);