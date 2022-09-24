<?php
include('../connection.php');
require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));
$period = $_POST['period'];
$lastweek = date("Y-m-d",strtotime('- 7 days'));
$lastmonth = date("Y-m-d",strtotime('- 30 days'));
$lastyear = date("Y-m-d",strtotime('- 365 days'));

// API to get total number of clients
if($period == 'week'){
$stmt = $mysqli->prepare("SELECT COUNT(*) FROM `users` u WHERE role_id LIKE 2
AND CAST(registered_at AS Date) > '$lastweek'");
}

else if($period == 'month'){
$stmt = $mysqli->prepare("SELECT COUNT(*) FROM `users` u WHERE role_id LIKE 2
AND CAST(registered_at AS Date) > '$lastmonth'");
}

else {
  $stmt = $mysqli->prepare("SELECT COUNT(*) FROM `users` u WHERE role_id LIKE 2
  AND CAST(registered_at AS Date) > '$lastyear'");
}

if(!$stmt->execute()) {
    die("Error in create post");
}

$results = $stmt->get_result();
$result = $results->fetch_assoc();
$response = [
"clients_count" => $result['COUNT(*)'],
];


echo json_encode($response);
     ?>
