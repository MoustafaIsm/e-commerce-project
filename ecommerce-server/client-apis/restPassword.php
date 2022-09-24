<?php
    include("../connection.php");

    require __DIR__ . '/vendor/autoload.php';

    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;

    $token = $_POST["token"];
    JWT::decode($token, new Key('fgh676', 'HS256'));

    $email = $_POST["email"];

    $newPassword = randomPassword();

    // the message
    $msg = "Thank you for reporting to us.\r\n Your new password is:\r\n " . $newPassword;

    // Make sure that ines are not longer than 70 characters
    $msg = wordwrap($msg,70, "\r\n");

    // send email
    mail($email,"Cloud Store Password Reset", $msg);

    $response["result"] = true;

    echo json_encode($response);



    // Function that generated a random string for password
    function randomPassword() {
        $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        $pass = array(); 
        $alphaLength = strlen($alphabet) - 1; 
        for ($i = 0; $i < 8; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }
        return implode($pass); 
    }
?>