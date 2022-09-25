<?php
    include("../connection.php");

    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    require __DIR__ . '/vendor/autoload.php';

    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;
    
    $token = $_POST["token"];
    JWT::decode($token, new Key('fgh676', 'HS256'));

    $discount_id = $_POST["discount_id"];

    $query = $mysqli->prepare("UPDATE `discounts` SET `active`=1 WHERE `discount_id`=?");
    $query->bind_param("i", $discount_id);
    $query->execute();

    $response['result'] = true;
    echo json_encode($response);
?>