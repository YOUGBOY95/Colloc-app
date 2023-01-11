<?php
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

// Connect to the database
$db = new PDO('mysql:host=localhost; dbname=collocation', 'collocation', '');

// Insert the expense into the database
$query = $db->prepare('INSERT INTO expenses (name, amount, payer, shared_by) VALUES (?, ?, ?, ?)');
$query->execute([$data['expenseName'], $data['expenseAmount'], $data['payer'], $data['sharedBy']]);

echo json_encode(['status' => 'success']);
