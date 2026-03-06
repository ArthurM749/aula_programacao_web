<?php

$id = $_GET['id'];

$arquivo = "usuarios.json";

$dados = file_get_contents($arquivo);

$usuarios = json_decode($dados, true);

foreach($usuarios as $i => $usuario){

    if($usuario['id'] == $id){

        unset($usuarios[$i]);

    }

}

$usuarios = array_values($usuarios);

$json = json_encode($usuarios);

file_put_contents($arquivo, $json);

echo "Usuario deletado";

?>