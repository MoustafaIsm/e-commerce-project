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

$user_id = $data->user_id;
$password = $data->password;
$first_name = $data->first_name;
$last_name = $data->last_name;
$email = $data->email;
$address = $data->address;
$telephone = $data->telephone;





$query = "UPDATE `users` SET  `password` = ? ,`first_name` = ? ,`last_name` = ? ,`email` = ?,`address` = ?,`telephone` = ?  WHERE users.user_id = ?  and users.role_id = 3";
$query1 = $mysqli->prepare($query);
$query1->bind_param("sssssii",$password, $first_name, $last_name , $email , $address , $telephone,$user_id);

if($query1->execute()){
  $response1["success"] = true;
}
else{
  $response1["success"] = false;

}

echo json_encode($response1);

 ?>
