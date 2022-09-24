<?php

header("Access-Control-Allow-Origin: *");
<<<<<<< HEAD
=======
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
>>>>>>> EC-17-admin-backend
header("Access-Control-Allow-Headers: *");

$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "ecommercedb";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);

?>