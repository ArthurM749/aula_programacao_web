<?php

$url = "https://jsonplaceholder.typicode.com/users";
$dados = json_decode(file_get_contents($url), true);

foreach($dados as $dado){
    echo("\n:::::::::::::::::::::::\n");
    echo("Nome: " . $dado["name"] . "\n");
    echo("Email: " . $dado["email"] . "\n");
    echo("Cidade: " . $dado["address"]["city"] . "\n");
}
