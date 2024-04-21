<?php

// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cardapio";

// Criar conexão com o banco de dados usando PDO
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consulta SQL para buscar os itens do cardápio principal
    $stmt = $conn->prepare("SELECT nome, descricao, valor FROM principal");
    $stmt->execute();

    // Buscar todos os resultados como um array associativo
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Enviar dados do cardápio principal como resposta JSON
    header('Content-Type: application/json');
    echo json_encode($result);
} catch (PDOException $e) {
    echo "Erro na conexão com o banco de dados: " . $e->getMessage();
}
