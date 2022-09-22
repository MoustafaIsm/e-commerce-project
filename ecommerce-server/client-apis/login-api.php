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

?>
