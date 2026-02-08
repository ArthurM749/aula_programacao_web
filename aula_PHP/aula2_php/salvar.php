<?php


$arquivo = "usuarios.json";


$id = $_POST['id'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];


$novoUsuario = [
    "id" => $id,
    "username" => $username,
    "email" => $email,
    "password" => $password
];

if (file_exists($arquivo)) {
    $conteudo = file_get_contents($arquivo);
    $usuarios = json_decode($conteudo, true);
} else {
    $usuarios = [];
}

$usuarios[] = $novoUsuario;

file_put_contents($arquivo, json_encode($usuarios, JSON_PRETTY_PRINT));

echo "Usuário cadastrado com sucesso!";
