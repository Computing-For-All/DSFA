<?php

    $name = $_POST['sender'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'andrew@computingforall.org';

    $email_subject = "Student Site Inquiry";

    $email_body = "Name: $name.\n".
                    "Email: $email.\n".
                    "Message: $message.\n";

    $to = 'andrew@computingforall.org';

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: Contact");

?>