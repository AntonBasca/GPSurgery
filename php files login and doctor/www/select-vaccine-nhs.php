<?php

header('Access-Control-Allow-Origin: * ');
header('Access-Control-Allow-Headers:');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$db = new PDO('sqlite:CentralNHS.db');

$stmt = $db->prepare('SELECT * FROM vaccines WHERE NHSNumber = :id');
$stmt->execute(array('id' => $_GET['id']));
$user = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($user);

?>