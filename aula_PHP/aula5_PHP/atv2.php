<?php

$salarios = [
    [
        "salario" => 2432,
    ],
        [
        "salario" => 1777,
    ],
        [
        "salario" => 8532,
    ],
        [
        "salario" => 2344,
    ],
        [
        "salario" => 2342,
    ],
        [
        "salario" => 7654,
    ],
        [
        "salario" => 4568,
    ],
        [
        "salario" => 3457,
    ],
];

$mediaSalario = 0;

$maiorSalario = 0;

$menorSalario = 999999999;

foreach ($salarios as $salario) {

    $mediaSalario +=  $salario["salario"];

    if($maiorSalario < $salario["salario"]){
        $maiorSalario = $salario["salario"];
    }
    
    if($menorSalario > $salario["salario"]){
        $menorSalario = $salario["salario"];
    }
}

$mediaSalario /= 8;

print_r("\n\nMédia Salarial: ".$mediaSalario);
print_r("\nMaior Salario: ".$maiorSalario);
print_r("\nMenor Salario: ".$menorSalario);
print_r("\n\n\n");