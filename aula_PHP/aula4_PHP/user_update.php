<?php

$id = $_POST['id'];
$nome = $_POST['nome'];
$email = $_POST['email'];

$arquivo = "usuarios.json";

$dados = file_get_contents($arquivo);
$usuarios = json_decode($dados, true);

foreach($usuarios as $i => $usuario){

    if($usuario['id'] = $id){

        $usuarios[$i]['nome'] == $nome;
        $usuarios[$i]['email'] = $email;
    }

}

$json = json_encode($usuario);

file_put_contents("usuarios.json", $json);

echo "Atualizado com sucesso";

?>