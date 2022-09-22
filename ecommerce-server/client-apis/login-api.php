<?php
require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


include("../connection.php");

//getting the data from the frontend 
$email = $_GET["email"];
$password = $_GET["password"];

// hashing the password
// $password = hash("sha256", $_POST["password"]);
// $password .= "a";

// getting the query result
$query = $mysqli->prepare("SELECT * FROM `users` where `email`=?");
$query->bind_param("s", $email);
$query->execute();
$array = $query->get_result();

// Constructing empty array
$response = [];

// Check initially if the user exists
echo mysqli_num_rows($array);
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
            "exp" => time() + 1
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
