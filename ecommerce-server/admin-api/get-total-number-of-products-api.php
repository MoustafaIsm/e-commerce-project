<?php
include('../connection.php');
$period = $_GET['period'];
$lastweek = date("Y-m-d",strtotime('- 7 days'));
$lastmonth = date("Y-m-d",strtotime('- 30 days'));
$lastyear = date("Y-m-d",strtotime('- 365 days'));

// API to get total number of sellers
if($period == 'week'){
$stmt = $mysqli->prepare("SELECT COUNT(*) FROM `products` WHERE CAST(added_at AS Date) > '$lastweek'");
}

else if($period == 'month'){
$stmt = $mysqli->prepare("SELECT COUNT(*) FROM `products` WHERE CAST(added_at AS Date) > '$lastmonth'");
}

else {
  $stmt = $mysqli->prepare("SELECT COUNT(*) FROM `products` WHERE CAST(added_at AS Date) > '$lastyear'");
}

if(!$stmt->execute()) {
    die("Error in create post");
}

$results = $stmt->get_result();
$result = $results->fetch_assoc();
$response = [
"products_count" => $result['COUNT(*)'],
];


echo json_encode($response);
     ?>
