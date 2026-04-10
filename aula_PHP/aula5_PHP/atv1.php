<?php

$pessoas = [
    ["Idade" => "53"],
    ["Idade" => "5"],
    ["Idade" => "3"],
    ["Idade" => "43"],
    ["Idade" => "13"],
    ["Idade" => "19"],
    ["Idade" => "26"],
    ["Idade" => "9"],
    ["Idade" => "64"],
    ["Idade" => "11"],
    ["Idade" => "42"],
    ["Idade" => "13"],
];

$contMaiores = 0;
$contMenores = 0;

foreach ($pessoas as $pessoa) {
    if ($pessoa["Idade"] >= 18){
        $contMaiores++;
    }

    if ($pessoa["Idade"] < 18){
       $contMenores++;
    }

    
}

print_r("\n\nPessoas Maiores de 18 anos: ". $contMaiores ."\nMenores de 18 anos: ". $contMenores ."\n\n\n");