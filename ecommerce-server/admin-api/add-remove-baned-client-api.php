<?php

include("../connection.php");

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
require __DIR__ . '/vendor/autoload.php';
$data = json_decode(file_get_contents("php://input"));

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$user_id =$data->user_id;
$admin_id =$data->admin_id;

$token = $data->token;
JWT::decode($token, new Key('fgh676', 'HS256'));


// get the info from user
$select_query = "Select * from bans where bans.user_id = ?";
$query = $mysqli->prepare($select_query);
$query->bind_param("i", $user_id);
$query->execute();
$array = $query->get_result();
$result = $array->fetch_assoc();


// check if the user is banned or not
if($result){
    $delete_query ="Delete from bans where bans.user_id = ?";
    $query1 = $mysqli->prepare($delete_query);
    $query1->bind_param("i", $user_id);
    if($query1->execute()){
        echo "User was successfully unbanned";
    };
}
else {
    $insert_query ="Insert into bans (admin_id, user_id) values (? , ?)";
    $query2 = $mysqli->prepare($insert_query);
    $query2->bind_param("ii",$admin_id, $user_id);
    if($query2->execute()){
        $response = [
          'banned'=>'true'
        ];
        echo json_encode($response);
    };
}

?>
