<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');

$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "ecommercedb";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);

?>
