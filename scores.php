<?php
// scores.php — Save to MySQL
$db_host = 'localhost';
$db_name = 'oxford_quiz';
$db_user = 'your_user';
$db_pass = 'your_pass';

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) { die("No data"); }

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$stmt = $conn->prepare("INSERT INTO scores (name, score, points) VALUES (?, ?, ?)");
$stmt->bind_param("sii", $data['name'], $data['score'], $data['points']);
$stmt->execute();
$stmt->close();
$conn->close();

echo "Saved successfully!";