<?php

header('Access-Control-Allow-Origin: * ');
header('Access-Control-Allow-Headers:');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$db = new PDO('sqlite:LocalGP.db');

$stmt = $db->query('SELECT * FROM Doctor'); 
$user = $stmt->fetch(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($user);

?>