<?php
    include("../connection.php");

    require __DIR__ . '/vendor/autoload.php';

    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;

    $token = $_GET["token"];
    JWT::decode($token, new Key('fgh676', 'HS256'));

    $searchKeyword = $_GET["search"];

    $searchKeyword = "%".$searchKeyword."%";

    $query = $mysqli->prepare("SELECT p.product_id, p.product_name, u.first_name, u.last_name, c.category_name, p.stock, p.product_price FROM `products` AS p INNER JOIN `product_categories` AS pc INNER JOIN `categories` AS c INNER JOIN `users` AS u ON p.product_id=pc.product_id AND pc.category_id=c.category_id AND p.seller_id=u.user_id WHERE p.product_name LIKE ?");
    $query->bind_param("s", $searchKeyword);
    $query->execute();
    $result = $query->get_result();

    $response = [];
    while ($row = $result->fetch_assoc()) {
        $response[] = $row;
    }

    echo json_encode($response);


?>