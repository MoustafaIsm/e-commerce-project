<?php
    include("../connection.php");

    require __DIR__ . '/vendor/autoload.php';

    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;
    
    $token = $_GET["token"];
    JWT::decode($token, new Key('fgh676', 'HS256'));

    $discountCodeId = $_GET["discountCodeId"];

    $query = $mysqli->prepare("UPDATE `discounts` SET `active`=1 WHERE `discount_id`=?");
    $query->bind_param("i", $discountCodeId);
    $query->execute();

    $response['result'] = true;

    echo json_encode($response);
?>