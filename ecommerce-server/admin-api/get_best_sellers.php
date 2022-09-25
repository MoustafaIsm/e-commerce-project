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

// API to get top 5 best sellers
if($period == 'Per Week'){
$stmt = $mysqli->prepare("SELECT COUNT(*) productscount, u.first_name, u.last_name
FROM products p, users u
WHERE p.seller_id LIKE u.user_id
AND CAST(p.added_at AS Date) > '$lastweek'
GROUP BY u.first_name DESC
LIMIT 5");
}

else if($period == 'Per Month'){
$stmt = $mysqli->prepare("SELECT COUNT(*) productscount, u.first_name, u.last_name
FROM products p, users u
WHERE p.seller_id LIKE u.user_id
AND CAST(p.added_at AS Date) > '$lastmonth'
GROUP BY u.first_name DESC
LIMIT 5");
}

else {
  $stmt = $mysqli->prepare("SELECT COUNT(*) productscount, u.first_name, u.last_name
  FROM products p, users u
  WHERE p.seller_id LIKE u.user_id
  AND CAST(p.added_at AS Date) > '$lastyear'
  GROUP BY u.first_name DESC
  LIMIT 5");
}

if(!$stmt->execute()) {
    die("Error in create post");
}

$results = $stmt->get_result();
$response =[];
while ($c = $results->fetch_assoc()) {
    $response[] = $c;
}


echo json_encode($response);
     ?>
