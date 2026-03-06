<?php

if($_SERVER['REQUEST_METHOD'] = 'POST'){


$nome = $_POST['nome'];
$email = $_POST['email'];
$idade = $_POST['idade'];

$arquivo = "usuarios.json";

if(file_exists($arquivo)){
    $dados = file_get_contents($arquivo);
    $usuarios = json_decode($dados);
}

$novoUsuario = [
    "nome" => $nome,
    "email" => $mail,
    "idade" => $idade
];

$usuarios[] = $novoUsuario;

$json = json_encode($usuarios);

file_put_contents($arquivo, $json);

echo "Usuario salvo com sucesso";

}

?>