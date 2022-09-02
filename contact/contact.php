<?php

    $myemail = 'info@computingforall.org';

    $name = $_POST['sender'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];

    $to = $myemail;

    $email_subject = "DSFA Students Inquiry from: $name";

    $email_body = "Name: $name\n".
                    "Email: $email_address\n".
                    "Message:\n$message\n";

    $headers = "From: $email_address\n";
    $headers .= "Reply-To: $email_address";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact-thanks.html");

?>