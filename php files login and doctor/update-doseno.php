<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$db = new PDO('sqlite:CentralNHS.db');

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
  // Get the request data
  parse_str(file_get_contents("php://input"), $requestData);

  $stmt = $db->prepare('UPDATE vaccines SET DoseNo = :doseNo WHERE NHSNumber = :id');
  $result = $stmt->execute(array(
    ':id' => $requestData['id'],
    ':doseNo' => $requestData['doseNo']
  ));

  // Return a JSON response indicating success or failure
  header('Content-Type: application/json');
  if ($result) {
    echo json_encode(array('success' => true));
  } else {
    echo json_encode(array('success' => false));
  }
} else {
  // Get the vaccine record with the specified NHSNumber
  $stmt = $db->prepare('SELECT * FROM vaccines WHERE NHSNumber = :id');
  $stmt->execute(array('id' => $_GET['id']));
  $vaccine = $stmt->fetchAll(PDO::FETCH_ASSOC);

  // Return a JSON response with the vaccine record
  header('Content-Type: application/json');
  echo json_encode($vaccine);
}
?>









