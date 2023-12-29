<?php

header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$servername = "localhost";
$username = "gvkinfotech_new_admin";
$password = "m;@;Zt[H*RC%";
$database = "gvkinfotech_main_db";

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);
$_POST = json_decode(file_get_contents("php://input"), true);
// Check connection
if ($conn->connect_error) {
    echo json_encode(array(
        "status" => false,
        "message"   => "Failed to Submit Details! Try again late1!",
        //.$conn->connect_error
    ));
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    if (empty($name)) {
        echo json_encode(array(
            "status" => false,
            "message"   => "Name is required!"
        ));
        // Close the database connection
        $conn->close();
        exit;
    }

    if (empty($email)) {
        echo json_encode(array(
            "status" => false,
            "message"   => "Email is required!"
        ));
        // Close the database connection
        $conn->close();
        exit;
    }

    if (empty($subject)) {
        echo json_encode(array(
            "status" => false,
            "message"   => "Subject is required!"
        ));
        // Close the database connection
        $conn->close();
        exit;
    }

    if (empty($message)) {
        echo json_encode(array(
            "status" => false,
            "message"   => "Message is required!"
        ));
        // Close the database connection
        $conn->close();
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(array(
            "status" => false,
            "message"   => "Invalid Email!"
        ));
        // Close the database connection
        $conn->close();
        exit;
    }

    // Prepare the SQL statement
    $sql = "INSERT INTO contact_from_reponses (`name`, email, `subject`,  `message`) VALUES ('$name', '$email',
    '$subject', '$message'
    )";

    // Execute the SQL statement
    if ($conn->query($sql) === true) {

        try {



            $from = "info@gvkinfotech.com";
            $to = "gokulrajinfotech21@gmail.com";

            // Create the email headers
            $headers = "From: $from\r\n";
            $headers .= "Reply-To: $from\r\n";
            // $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/html; charset=utf-8\r\n";


            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            // $mail->Username = 'info@gvkinfotech.com'; // your Gmail address
            // $mail->Password = 'sblihfqnbrupatuu';
            $mail->Username = 'gokulrajinfotech21@gmail.com'; // your Gmail address
            $mail->Password = 'hehkezgyrfmeelry'; // your Gmail password
            // $mail->SMTPSecure = 'ssl';
            // $mail->Port = 465;
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;

            $mail->setFrom('admin@gvsneoinfotech.com'); // your Gmail address

            $mail->addAddress($to);

            $mail->isHTML(true);
            $mail->Subject = "New Contact Form Submission - $subject";
            $mail->Body = "
                Name : $name<br/>
                Email: $email<br/>
                Company Name: $subject<br/>
                message: $message
            ";

            $result = $mail->send();


            //  $smtpConnect = fsockopen($smtpHost, $smtpPort, $errno, $errstr, 30);

            if (!$result) {
                // connection errr!  $errstr ($errno)
                echo json_encode(array(
                    "status" => false,
                    "message"   => "Details Submitted Successfuly! Failed to sent email!"
                ));
            } else {
                echo json_encode(array(
                    "status" => true,
                    "message"   => "Details Submitted Successfuly! Email Sent!"
                ));
            }
        } catch (Exception $e) {
            echo json_encode(array(
                "status" => false,
                "message"   => "Details Submitted Successfuly! Failed to sent email!"
            ));
        }
    } else {
        // echo "Error: " . $sql . "<br>" . $conn->error;
        echo json_encode(array(
            "status" => false,
            "message"   => "Failed to Submit Details! Try again later!"
        ));
    }
} else {
    echo json_encode(array(
        "status" => false,
        "message"   => "Invalid Request! Please give valid input!"
    ));
}

$conn->close();
