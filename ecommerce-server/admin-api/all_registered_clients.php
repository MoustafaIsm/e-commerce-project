<?php 


include("../connection.php");

$role = "client";

$query = "select user_id, password, first_name, last_name, email, address, telephone, profile_picture from users INNER JOIN user_roles on user_roles.role_id = users.role_id WHERE role_name = ?";

$query1 = $mysqli->prepare($query);
$query1->bind_param("s", $role);
$query1->execute();
$array = $query1->get_result();

$response = [];

while ($c = $array->fetch_assoc()) {
    $response[] = $c;
}

echo json_encode($response);

?>