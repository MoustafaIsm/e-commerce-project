<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$user_id = $_POST["user_id"];
$password = $_POST["password"];
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$address = $_POST["address"];
$telephone = $_POST["telephone"];




$query = "UPDATE `users` SET  `password` = ? ,`first_name` = ? ,`last_name` = ? ,`email` = ?,`address` = ?,`telephone` = ?  WHERE users.user_id = ?  and users.role_id = 3";
$query1 = $mysqli->prepare($query);
$query1->bind_param("sssssii",$password, $first_name, $last_name , $email , $address , $telephone,$user_id);
$query1->execute();

$response1["success"] = true;
echo json_encode($response1);

 ?>
