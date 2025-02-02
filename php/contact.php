<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Send email or save to database
    // Example: mail("your-email@example.com", "New Contact Form Submission", $message);

    echo "Thank you, $name! Your message has been sent.";
}
?>