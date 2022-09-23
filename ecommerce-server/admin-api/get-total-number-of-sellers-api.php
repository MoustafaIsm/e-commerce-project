<?php
include('../connection.php');

// API to get total number of sellers

$stmt = $mysqli->prepare(" SELECT COUNT(*) FROM `users` WHERE role_id LIKE 3");
if(!$stmt->execute()) {
    die("Error in create post");
}

$results = $stmt->get_result();
$result = $results->fetch_assoc();
$response = [
"sellers_count" => $result['COUNT(*)'],
];


echo json_encode($response);
     ?>
