<?php
    include("../connection.php");

    require __DIR__ . '/vendor/autoload.php';

    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;

    $userId = $_GET["userId"];
    $productId = $_GET["productId"];
    
    $token = $_GET["token"];

    $key = 'fgh676';
    $decoded = JWT::decode($token, new Key($key, 'HS256'));
    $decoded_array = (array) $decoded;

    $userIdToken = $decoded_array["userId"];
    $emailToken = $decoded_array["email"];

    $query1 = $mysqli->prepare("SELECT * FROM `users` WHERE `user_id`=? AND `email`=?");
    $query1->bind_param("is", $userIdToken, $emailToken);
    $query1->execute();
    $result1 = $query1->get_result();

    if($result1->num_rows > 0) {
        $query = $mysqli->prepare("INSERT INTO `favorite_products`(`user_id`, `product_id`) VALUES (?,?)");
        $query->bind_param("ii", $userId, $productId);
        $result = $query->execute();

        $response["result"] = $result;
    } else {
        $response["result"] = "Invalid token";
    }

    echo json_encode($response);
?>