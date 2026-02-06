console.log("=================== Lista de Compras ===================")

let listaDeCompras = ["Leite", "Biscoito","Chocolate","M1 Abrams","Bolo de Cenoura",];

console.log(listaDeCompras);

console.log("> > Adiciona café no final da lista:")
listaDeCompras.push("Café");

console.log(listaDeCompras);

console.log("> > Tira a primeira palavra da lista:")
listaDeCompras.shift();
console.log(listaDeCompras);
console.log("> > Filtra palavras com mais de 5 caracteres:")

console.log(listaDeCompras.filter(palavra => palavra.length > 5));


/////////////////////////////////////////////////////////

console.log("> > Separa a frase em uma lista:")

let frase =  "JavaScript é uma linguagem poderosa! ";

frase = frase.trim();

frase = frase.split(" ");

console.log(frase)
