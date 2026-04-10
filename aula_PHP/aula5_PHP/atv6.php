<?php
$supermercado = [
    ["nome" => "Arroz 5kg", "preco" => 25.50, "quantidade" => 2],
    ["nome" => "Feijão 1kg", "preco" => 8.90, "quantidade" => 3],
    ["nome" => "Mustang P-51", "preco" => 400322.00, "quantidade" => 1],
    ["nome" => "Café 500g", "preco" => 15.00, "quantidade" => 10]
];

$totalCompra = 0;

echo "\n\n--- RESUMO DA COMPRA ---\n";

foreach ($supermercado as $item) {
    $totalItem = $item['preco'] * $item['quantidade'];
    $totalCompra = $totalCompra + $totalItem;

    echo "Item: " . $item['nome'] . " | ";
    echo "Qtd: " . $item['quantidade'] . " | ";
    echo "Total: R$ " . number_format($totalItem, 2, ',', '.') . "\n";
}

echo "------------------------\n";
echo "VALOR TOTAL: R$ " . number_format($totalCompra, 2, ',', '.') . "\n\n\n";
