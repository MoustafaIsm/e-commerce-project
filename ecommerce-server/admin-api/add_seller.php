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

$password = $data->password;
$first_name = $data->first_name;
$last_name = $data->last_name;
$email = $data->email;
$address = $data->address;
$telephone = $data->telephone;
$profile_picture = "NA";
$role_id = 3;
$registered_at = $data->registered_at;

$pass = hash("sha256", $password);
$pass .= "a";
echo $pass;


$query = "INSERT INTO users(password,first_name,last_name, email, address, telephone, profile_picture, role_id,registered_at)
VALUES (?,?,?,?,?,?,?,?,?);";
$query1 = $mysqli->prepare($query);
$query1->bind_param("sssssisis", $pass, $first_name, $last_name , $email , $address , $telephone, $profile_picture, $role_id, $registered_at);
$query1->execute();


$response1["succes"] = true;
echo json_encode($response1);

 ?>
