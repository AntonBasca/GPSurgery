<?php
ini_set('log_errors', 1);
ini_set('error_log', 'C:/Users/omerf/Desktop/error.log');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST');
$dsn = 'sqlite:LocalGP.db';

try {
    $pdo = new PDO($dsn);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Read request body and parse JSON data
$requestBody = file_get_contents('php://input');
$data = json_decode($requestBody, true);

// Set GenderCode to 'M' by default
$data['GenderCode'] = 'M';

// Insert data into Patient table
$stmt = $pdo->prepare('INSERT INTO Patient (NHSNumber, Forename, Surname, PersonDOB, GenderCode, PostCode, PatientRecordNo, PatientAddress, PatientEmail, PatientPassword, PatientPhone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
$stmt->execute([
    $data['NHSNumber'],
    $data['Forename'],
    $data['Surname'],
    $data['PersonDOB'],
    $data['GenderCode'],
    $data['PostCode'],
    $data['PatientRecordNo'],
    $data['PatientAddress'],
    $data['PatientEmail'],
    $data['PatientPassword'],
    $data['PatientPhone']
]);

// Return a JSON response
$response = [
    'status' => 'success',
    'message' => 'Data inserted successfully'
];
echo json_encode($response);


?>