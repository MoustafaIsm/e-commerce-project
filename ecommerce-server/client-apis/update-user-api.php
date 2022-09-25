<?php

include("../connection.php");

require __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$address = $_POST["address"];
$telephone = $_POST["telephone"];
$profile_picture = $_POST["profile_picture"];
$user_id = $_POST["user_id"];

$token = $_POST["token"];
JWT::decode($token, new Key('fgh676', 'HS256'));

if($profile_picture != 'NA'){
$profile_picture = convertBackToImage($profile_picture, $user_id);
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

$query = $mysqli -> prepare("UPDATE users SET first_name = ?, last_name = ?, address = ?, telephone = ?, profile_picture = ? WHERE user_id = ?");
$query -> bind_param("sssssi", $first_name, $last_name, $address, $telephone, $profile_picture, $user_id);
$result = $query -> execute();

$response["result"] = $result;

echo json_encode($response);

?>
