<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_GET["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$password = $_POST["password"];
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$address = $_POST["address"];
$telephone = $_POST["telephone"];
$profile_picture = $_POST["profile_picture"];
$role_id = 3;


$query = "INSERT INTO `users`(`password`, `first_name`, `last_name`, `email`, `address`, `telephone`, `profile_picture`) 
VALUES (?,?,?,?,?,?,?)";
$query1 = $mysqli->prepare($query);
$query1->bind_param("issssis", $password, $first_name, $last_name , $email , $address , $telephone, $profile_picture);
$query1->execute();


$response1["success"] = true;
echo json_encode($response1);

 ?>
