<?php

include("../connection.php");

//getting the data from the frontend 
$email = $_POST["email"];

// hashing the password
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
echo mysqli_num_rows($array);
if ($array->num_rows > 0) {
    $response["ispresent"] = true;

    // fetching the data base password 
    $data_base_pass = $array->fetch_assoc()['password'];

    //  Check for the validity of input password
    if ($data_base_pass != $password) {
        $response["pass_valid"] = false;
    } else {
        $response["pass_valid"] = true;
    }
} else {
    $response["ispresent"] = false;
}

// Sending the json object
$json = json_encode($response);
echo $json;


?>
