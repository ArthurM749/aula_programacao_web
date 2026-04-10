<?php

$url = "https://jsonplaceholder.typicode.com/posts";
$dados = json_decode(file_get_contents($url), true);

foreach($dados as $dado){
    echo("\n:::::::::::::::::::::::\n");
    echo("Id Usuário: " . $dado["userId"] . "\n\n");
    echo("Titulo: " . $dado["title"] . "\n\n");
    echo("Conteudo: " . $dado["body"] . "\n\n");
}
