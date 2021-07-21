<?php
$name = $_POST['name'];
$visitor_email= $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from ='kriyesharyal@gmail.com' 
$email_subject = 'New Form Submission '
$email_body ="user name: $name.\n".
                "user name: $visitor_email.\n".
                "user name: $subject.\n".
                "user name: $message.\n";

$to ="aryalkriyesh@gmail.com"
$headers = "from: $email_from \r\n";

$headers .="reply-To: $visitor_email \r\n $"

mail($to,$email_subject,$email_body,$headers);
header("Location: contact.html");

?>