<?php
    include("../connection.php");

    require __DIR__ . '/vendor/autoload.php';

    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;
    
    $token = $_POST["token"];
    JWT::decode($token, new Key('fgh676', 'HS256'));

    $productId = $_POST["productId"];
    $discountCode = $_POST["discountCode"];

    $query = $mysqli->prepare("SELECT d.percentage, d.discount_code
    FROM products p INNER JOIN users u INNER JOIN discounts d
    ON p.seller_id=u.user_id AND u.user_id=d.seller_id
    WHERE p.product_id=? AND d.active = 0 AND d.discount_code=?
    GROUP BY p.seller_id");
    $query->bind_param("is", $productId, $discountCode);
    $query->execute();
    $result = $query->get_result();
    $response = [];

    if ($result->num_rows  > 0) {
        while ($row=$result->fetch_assoc()) {
            $response["discount"] = $row;
        }
    } else {
        $response["discount"] = false;
    }

    echo json_encode($response);
?>