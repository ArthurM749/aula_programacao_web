//Criando e Manipulando Objetos

    console.log("================ OBJETOS ===================");

const livro = {
    titulo: "Homem-Aranha Superior",
    autor: "Sten Lee",
    paginas: 272,
    disponivel: "Amazon",
}

console.log(livro.titulo);
console.log(livro["autor"]);

livro.editora = "Marvel Comics";
livro.detalhes = "A intervenção de Miguel e os eventos subsequentes ajudam a preparar o terreno para a saga 'Aranha-Verso', onde múltiplos Homens-Aranha de diferentes realidades se juntam para lutar contra os Herdeiros. A presença de Miguel O'Hara serve como um lembrete do legado de Peter Parker e do impacto que as ações de Otto estão tendo na continuidade do tempo e do universo aracnídeo.";

console.log(livro["detalhes"]);

const biblioteca = {
    livro:["Homem-Aranha Superior",
        "Homem de Ferro",
        "Capitão América - O Soldado Invernal",
        "Hulk",
        "Batman",
        "Coringa",
    ]

}

console.log("Biblioteca_Livros: ",biblioteca["livro"]);

//Criando e Usando Funções
console.log("================ FUNÇÕES ====================");

function saudar(nome){
    console.log( `Olá,${nome}`);
}

function calcularMeta(nota1,nota2,nota3){
    console.log((nota1 + nota2 + nota3)/3);
}

function apresentarProduto(nomeProduto,preco = 0){
    console.log(`Nome Produto: ${nomeProduto}\nPreço: R$${preco}`);
}

saudar("Arthur");
calcularMeta(6,8,9);
apresentarProduto("Caixa de Leite",10.00);