<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
include("../connection.php");

$password = hash("sha256", $_POST["password"]);
$password .= "a";
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$address = $_POST["address"];
$telephone = $_POST["telephone"];
$profile_picture = $_POST["profile_picture"];
$registered_at = $_POST["registered_at"];

$query = $mysqli->prepare("INSERT INTO `users`(`password`, `first_name`, `last_name`, `email`, `address`, `telephone`, `profile_picture`, `role_id`, `registered_at`) VALUES (?, ?, ?, ?, ?, ?, ?, 2, ?)");
$query->bind_param("sssssiss", $password, $first_name, $last_name, $email, $address, $telephone, $profile_picture, $registered_at);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>