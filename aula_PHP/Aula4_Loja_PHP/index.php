<?php
// ── Roteamento simples ──────────────────────────────────────────────
$page = $_GET['page'] ?? 'products';
$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

// ── Funções da API ──────────────────────────────────────────────────
function api(string $endpoint): mixed
{
    $json = @file_get_contents('https://fakestoreapi.com' . $endpoint);
    return $json ? json_decode($json, true) : null;
}

// ── Busca dados conforme a página ───────────────────────────────────
$product = null;
$products = [];
$users = [];

if ($page === 'product' && $id > 0) {
    $product = api("/products/{$id}");
} elseif ($page === 'users') {
    $users = api('/users') ?? [];
} else {
    $products = api('/products') ?? [];
}
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FakeStore</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: sans-serif;
            background: #f5f5f5;
            color: #222;
        }

        nav {
            background: #111;
            padding: 1rem 2rem;
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        nav strong {
            color: #fff;
            font-size: 1.2rem;
        }

        nav a {
            color: #aaa;
            text-decoration: none;
            font-size: .9rem;
        }

        nav a:hover {
            color: #fff;
        }

        main {
            max-width: 1100px;
            margin: 2rem auto;
            padding: 0 1.5rem;
        }

        /* Grid de produtos */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 1.25rem;
        }

        .card {
            background: #fff;
            border-radius: 6px;
            border: 1px solid #e0e0e0;
            overflow: hidden;
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            transition: box-shadow .2s;
        }

        .card:hover {
            box-shadow: 0 4px 16px rgba(0, 0, 0, .12);
        }

        .card-img {
            background: #fafafa;
            padding: 1.5rem;
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .card-img img {
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
        }

        .card-body {
            padding: 1rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: .4rem;
        }

        .card-cat {
            font-size: .7rem;
            text-transform: uppercase;
            color: #e05a1e;
            font-weight: 600;
            letter-spacing: .06em;
        }

        .card-title {
            font-size: .9rem;
            font-weight: 600;
            line-height: 1.3;
        }

        .card-price {
            font-size: 1rem;
            font-weight: 700;
            margin-top: auto;
            padding-top: .5rem;
        }

        .card-btn {
            display: block;
            text-align: center;
            background: #111;
            color: #fff;
            padding: .6rem;
            font-size: .8rem;
            text-decoration: none;
            transition: background .15s;
        }

        .card-btn:hover {
            background: #e05a1e;
        }

        /* Detalhe */
        .detail {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: start;
        }

        .detail-img {
            background: #fafafa;
            border-radius: 6px;
            padding: 2.5rem;
            text-align: center;
        }

        .detail-img img {
            max-width: 100%;
            max-height: 320px;
            object-fit: contain;
        }

        .detail-info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .detail-cat {
            font-size: .75rem;
            text-transform: uppercase;
            color: #e05a1e;
            font-weight: 600;
            letter-spacing: .08em;
        }

        .detail-title {
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 1.25;
        }

        .detail-price {
            font-size: 1.8rem;
            font-weight: 700;
        }

        .detail-desc {
            line-height: 1.7;
            color: #555;
            border-top: 1px solid #eee;
            padding-top: 1rem;
        }

        .detail-rating {
            color: #f0a500;
            font-size: .9rem;
        }

        .back {
            display: inline-block;
            color: #666;
            text-decoration: none;
            font-size: .85rem;
            margin-bottom: 1.5rem;
        }

        .back:hover {
            color: #222;
        }

        /* Tabela usuários */
        table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border-radius: 6px;
            overflow: hidden;
            border: 1px solid #e0e0e0;
        }

        th {
            background: #111;
            color: #f0a500;
            font-size: .75rem;
            text-transform: uppercase;
            letter-spacing: .06em;
            padding: .85rem 1rem;
            text-align: left;
        }

        td {
            padding: .8rem 1rem;
            border-bottom: 1px solid #f0f0f0;
            font-size: .9rem;
        }

        tr:last-child td {
            border-bottom: none;
        }

        tr:hover td {
            background: #fafafa;
        }

        h2 {
            font-size: 1.3rem;
            margin-bottom: 1.25rem;
        }

        @media(max-width:640px) {
            .detail {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>

<body>

    <nav>
        <strong>FakeStore</strong>
        <a href="?page=products">Produtos</a>
        <a href="?page=users">Usuários</a>
    </nav>

    <main>

        <?php if ($page === 'products'): ?>

            <h2>Produtos</h2>
            <div class="grid">
                <?php foreach ($products as $p): ?>
                    <a href="?page=product&id=<?= $p['id'] ?>" class="card">
                        <div class="card-img">
                            <img src="<?= htmlspecialchars($p['image']) ?>" alt="">
                        </div>
                        <div class="card-body">
                            <span class="card-cat"><?= htmlspecialchars($p['category']) ?></span>
                            <span class="card-title"><?= htmlspecialchars(mb_strimwidth($p['title'], 0, 55, '…')) ?></span>
                            <span class="card-price">R$ <?= number_format($p['price'] * 5.2, 2, ',', '.') ?></span>
                        </div>
                        <span class="card-btn">Ver produto</span>
                    </a>
                <?php endforeach; ?>
            </div>

        <?php elseif ($page === 'product' && $product): ?>

            <a href="?page=products" class="back">← Voltar</a>
            <div class="detail">
                <div class="detail-img">
                    <img src="<?= htmlspecialchars($product['image']) ?>" alt="">
                </div>
                <div class="detail-info">
                    <span class="detail-cat"><?= htmlspecialchars($product['category']) ?></span>
                    <h1 class="detail-title"><?= htmlspecialchars($product['title']) ?></h1>
                    <div class="detail-rating">
                        ★ <?= number_format($product['rating']['rate'], 1) ?>
                        <span style="color:#999"> (<?= $product['rating']['count'] ?> avaliações)</span>
                    </div>
                    <div class="detail-price">R$ <?= number_format($product['price'] * 5.2, 2, ',', '.') ?></div>
                    <p class="detail-desc"><?= htmlspecialchars($product['description']) ?></p>
                </div>
            </div>

        <?php elseif ($page === 'users'): ?>

            <h2>Usuários (<?= count($users) ?>)</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Username</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($users as $u): ?>
                        <tr>
                            <td><?= $u['id'] ?></td>
                            <td><?= htmlspecialchars(ucfirst($u['name']['firstname']) . ' ' . ucfirst($u['name']['lastname'])) ?>
                            </td>
                            <td style="color:#888">@<?= htmlspecialchars($u['username']) ?></td>
                            <td><?= htmlspecialchars($u['email']) ?></td>
                            <td><?= htmlspecialchars($u['phone']) ?></td>
                            <td><?= htmlspecialchars(ucfirst($u['address']['city'])) ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>

        <?php else: ?>
            <p>Página não encontrada. <a href="?page=products">Voltar</a></p>
        <?php endif; ?>

    </main>

</body>

</html>