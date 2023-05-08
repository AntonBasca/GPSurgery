<?php
ini_set('log_errors', 1);
ini_set('error_log', 'C:/Users/omerf/Desktop/error.log');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');

// Connect to the database
$dsn = 'sqlite:LocalGP.db';

try {
    $pdo = new PDO($dsn);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Get the user data from the database
$stmt = $pdo->prepare("SELECT * FROM Doctor WHERE DocEmail = ?");
$stmt->execute([$_GET['email']]);
$user = $stmt->fetch();

// Debug output
var_dump($user);

// Return the user data as JSON
$json = json_encode($user);
if ($json === false) {
    $error = json_last_error_msg();
    die("JSON encoding failed: $error");
}
echo $json;
?>
