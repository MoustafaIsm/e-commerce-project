<?php

header("Access-Control-Allow-Origin: http://127.0.0.1:5500 ");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


include("../connection.php");

//getting the data from the frontend 
$email = $_POST["email"];
$password = $_POST["password"];

//hashing the password
$password = hash("sha256", $_POST["password"]);
$password .= "a";

// getting the query result
$query = $mysqli->prepare("SELECT * FROM `users` where `email`=?");
$query->bind_param("s", $email);
$query->execute();
$array = $query->get_result();

// Constructing empty array
$response = [];

// Check initially if the user exists
if ($array->num_rows > 0) {
    $response["ispresent"] = true;

    // Fetching the user
    $user = $array->fetch_assoc();

    // fetching the data base password 
    $data_base_pass = $user['password'];

    //  Check for the validity of input password
    if ($data_base_pass != $password) {
        $response["pass_valid"] = false;
    } else {
        $response["pass_valid"] = true;

        $response["user"] = $user;

        // Generate the JWT token
        $key = "fgh676";

        $payload = [
            "userId" => $user["user_id"],
            "email" => $user["email"],
            "exp" => time() + 1000
        ];

        $jwt = JWT::encode($payload, $key, 'HS256');

        $response["token"] = $jwt;

    }
} else {
    $response["ispresent"] = false;
}

// Sending the json object
$json = json_encode($response);
echo $json;


?>
