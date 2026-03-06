<?php

//Exercício 2:

$dados = [
    [
        "id"=> 1,
        "nome"=>"Arthur",
        "acesso"=>true
    ]
];

$json = json_encode($dados,JSON_PRETTY_PRINT);
file_put_contents("dados.json", $json);

echo "Salvo os dados<br>";
echo "<br>::::::::::::::::::::::::::::::::::<br>";



//Exercício 4:


