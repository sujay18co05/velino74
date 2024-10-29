<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "airline_reservation";

// Create connection to MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
	$email= $_POST['email'];
    $pass = $_POST['password'];

    // Insert data into users table
    $sql = "INSERT INTO users (username, email, password) VALUES ('$user', '$email', '$pass')";

    if ($conn->query($sql) === TRUE) {
        echo "Signup successful! You can now login.";
		header("Location: login_page.html");
		exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>
