<?php

include("../connection.php");

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

$seller_id = $_POST["seller_id"];
$product_id = $_POST["product_id"];
$prduct_name = $_POST["product_name"];
$prduct_price = $_POST["product_price"];
$description = $_POST["description"];
$stock = $_POST["stock"];
$added_at = $_POST["added_at"];
$viewing_count = $_POST["viewing_count"];
$product_picture = $_POST["product_picture"];

if($product_picture != "NA"){
$product_picture =  convertBackToImage($product_picture,$product_name)
}
function convertBackToImage($base64Image, $user) {
        // PHP permission and to create the directory if it doesnt exist
        $dir = $_SERVER['DOCUMENT_ROOT'] . "/SEF/e-commerce-project/images/" . $user;
        if (!file_exists($dir)) {
            mkdir($dir, 0777, true);
        }
        // Explode the original string
        // $base64String is the base64 image without any extra stuff
        $base64String = getBase64String($base64Image);
        // $imageExtention is the original extendtion of the image
        $imageExtention = getImageExtention($base64Image);
        // The path to save the image in
        $imageName = $dir . "/" . uniqid('') . "." . $imageExtention;
        // $data is the Data of the image after decoding
        $data = base64_decode($base64String);
        // Bind the decoded data to an image
        $success = file_put_contents($imageName, $data);
        $url = str_replace("C:/xampp/htdocs", "http://localhost", $imageName);
        return $url;
    }
    function getBase64String($image) {
        return explode(",", $image)[1];
    }
    function getImageExtention($image) {
        $extra1 = explode(",", $image)[0];
        $extra2 = explode(";", $extra1)[0];
        return explode("/", $extra2)[1];
    }

$query = "UPDATE `products` SET  `product_name` = ? ,`product_price` = ? ,`description` = ? ,`stock` = ?,`added_at` = ? ,`viewing_count`= ? , `product_picture` = ? where products.product_id = ? and products.seller_id = ?";
$query1 = $mysqli->prepare($query);
$query1->bind_param("sisisiii", $prduct_name , $prduct_price , $description , $stock , $added_at , $viewing_count , $product_picture , $product_id , $seller_id);
$query1->execute();

$response1["success"] = true;
echo json_encode($response1);

?>
