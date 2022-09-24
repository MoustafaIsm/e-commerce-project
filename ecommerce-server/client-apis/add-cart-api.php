<?php

    include("../connection.php");

    require __DIR__ . '/vendor/autoload.php';

    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;

    $token = $_POST["token"];
    JWT::decode($token, new Key('fgh676', 'HS256'));

    $userId = $_POST["userId"];
    $purchase_date = $_POST["purchase_date"];
    $total_cost = $_POST["total_cost"];
    $productsIdArray = $_POST["productsId"];

    $query1 = $mysqli->prepare("INSERT INTO `carts`(`user_id`, `purchase_date`, `total_cost`) VALUES (?,?,?)");
    $query1->bind_param("isi", $userId, $purchase_date, $total_cost);
    $query1->execute();

    $query2 = $mysqli->prepare("SELECT MAX(c.cart_id) as id FROM `carts` as c");
    $query2->execute();
    $result1 = $query2->get_result()->fetch_assoc()["id"];

    foreach ($productsIdArray as $index => $id) {
        $query3 = $mysqli->prepare("INSERT INTO `products_in_carts`(`product_id`, `cart_id`) VALUES (?,?)");
        $query3->bind_param("ii", $id, $result1);
        $query3->execute();
    }

    $response["result"] = true;

    echo json_encode($response);
?>