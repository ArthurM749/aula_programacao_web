<?php

$arquivo = "usuarios.json";

if (!file_exists($arquivo)) {
    echo "Nenhum usuário cadastrado.";
    exit;
}

$conteudo = file_get_contents($arquivo);
$usuarios = json_decode($conteudo, true);

if (!$usuarios || count($usuarios) === 0) {
    echo "Nenhum usuário cadastrado.";
    exit;
}

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Usuários Cadastrados</title>
</head>
<body>

<h2>Lista de Usuários</h2>

<table border="1" cellpadding="8">
    <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>Senha</th>
    </tr>

    <?php foreach ($usuarios as $usuario): ?>
        <tr>
            <td><?= $usuario['id'] ?></td>
            <td><?= $usuario['username'] ?></td>
            <td><?= $usuario['email'] ?></td>
            <td><?= $usuario['password'] ?></td>
        </tr>
    <?php endforeach; ?>

</table>

<br>
<a href="index.html">Voltar ao cadastro</a>

</body>
</html>
