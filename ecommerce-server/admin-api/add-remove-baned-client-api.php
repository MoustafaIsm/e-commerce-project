<?php 

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$user_id =$_GET["user_id"];
$admin_id =$_GET["admin_id"];

$token = $_GET["token"];
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
        echo "User was successfully banned.";
    };
}

?>