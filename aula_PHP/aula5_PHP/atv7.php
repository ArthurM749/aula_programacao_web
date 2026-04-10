<?php

$estoqueCelulares = [
    ["modelo" => "iPhone 15", "preco" => 5500.00, "quantidade" => 5],
    ["modelo" => "Galaxy S24", "preco" => 4800.00, "quantidade" => 8],
    ["modelo" => "Xiaomi 13", "preco" => 3200.00, "quantidade" => 10],
    ["modelo" => "Moto G84", "preco" => 1500.00, "quantidade" => 15]
];

$totalGeral = 0;

echo "\n\n\n--- ESTOQUE DE CELULARES ---\n";


foreach ($estoqueCelulares as $celular) {

    $valorPorModelo = $celular['preco'] * $celular['quantidade'];
    

    $totalGeral = $totalGeral + $valorPorModelo;


    echo "Modelo: " . $celular['modelo'] . " | ";
    echo "Qtd: " . $celular['quantidade'] . " | ";
    echo "Subtotal: R$ " . number_format($valorPorModelo, 2, ',', '.') . "\n";
}

echo "----------------------------\n";
echo "TOTAL GERAL EM ESTOQUE: R$ " . number_format($totalGeral, 2, ',', '.') . "\n\n\n";
