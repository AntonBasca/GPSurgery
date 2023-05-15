<?php

echo "hello world";
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

// Get the user data from the Doctor table
$stmt = $pdo->prepare("SELECT * FROM Doctor WHERE DocEmail = ?");
$stmt->execute([$_GET['email']]);
$user = $stmt->fetch();

// If user not found in Doctor table, check the Patient table
if (!$user) {
    $stmt = $pdo->prepare("SELECT * FROM Patient WHERE PatientEmail = ?");
    $stmt->execute([$_GET['email']]);
    $user = $stmt->fetch();
}

// If user not found in Doctor and Patient tables, check the Admin table
if (!$user) {
    $stmt = $pdo->prepare("SELECT * FROM Admin WHERE AdminEmail = ?");
    $stmt->execute([$_GET['email']]);
    $user = $stmt->fetch();
}

// Check if user was found
if ($user) {
    // Return the user data as JSON
    echo json_encode($user);
} else {
    // Return an error message as JSON
    echo json_encode(['error' => 'User not found']);
}

?>