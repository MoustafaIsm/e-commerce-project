<?php
include('../connection.php');
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
require __DIR__ . '/vendor/autoload.php';
$data = json_decode(file_get_contents("php://input"));
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $data->token;
JWT::decode($token, new Key('fgh676', 'HS256'));
$period = $data->period;
$lastweek = date("Y-m-d",strtotime('- 7 days'));
$lastmonth = date("Y-m-d",strtotime('- 30 days'));
$lastyear = date("Y-m-d",strtotime('- 365 days'));

// API to get total number of clients
if($period == 'This Week'){
$stmt = $mysqli->prepare("SELECT COUNT(*) FROM `users` u WHERE role_id LIKE 2
AND CAST(registered_at AS Date) > '$lastweek'");
}

else if($period == 'This Month'){
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
