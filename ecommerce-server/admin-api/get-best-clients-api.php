<?php
include('../connection.php');
require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_GET["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$period = $_GET['period'];
$lastweek = date("Y-m-d",strtotime('- 7 days'));
$lastmonth = date("Y-m-d",strtotime('- 30 days'));
$lastyear = date("Y-m-d",strtotime('- 365 days'));

// API to get top 5 best sellers
if($period == 'week'){
$stmt = $mysqli->prepare("SELECT COUNT(*) itemspurchased, u.first_name, u.last_name
  FROM carts c, users u
  WHERE c.user_id LIKE u.user_id
  AND CAST(c.purchase_date AS Date) > '$lastweek'
  GROUP BY u.first_name DESC
  LIMIT 5");
}

else if($period == 'month'){
$stmt = $mysqli->prepare("SELECT COUNT(*) itemspurchased, u.first_name, u.last_name
  FROM carts c, users u
  WHERE c.user_id LIKE u.user_id
  AND CAST(c.purchase_date AS Date) > '$lastmonth'
  GROUP BY u.first_name DESC
  LIMIT 5");
}

else {
  $stmt = $mysqli->prepare("SELECT COUNT(*) itemspurchased, u.first_name, u.last_name
    FROM carts c, users u
    WHERE c.user_id LIKE u.user_id
    AND CAST(c.purchase_date AS Date) > '$lastyear'
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
