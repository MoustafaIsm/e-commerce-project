<?php
    include("../connection.php");

    require __DIR__ . '/vendor/autoload.php';

    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;

    $userId = $_GET["userId"];
    $productId = $_GET["productId"];
    
    $token = $_GET["token"];
    JWT::decode($token, new Key('fgh676', 'HS256'));

    $query = $mysqli->prepare("INSERT INTO `favorite_products`(`user_id`, `product_id`) VALUES (?,?)");
    $query->bind_param("ii", $userId, $productId);
    $result = $query->execute();

    $response["result"] = $result;

    echo json_encode($response);
?>