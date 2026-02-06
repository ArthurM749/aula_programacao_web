let x = 10;
let y = 20;
console.log("Valor do X: ",x);
console.log("Valor do Y: ",y);
console.log("-----------------------------------------------");
console.log("Soma: ", x+y);
console.log("Subitração: ", x-y);
console.log("multiplicação: ",x*y);
console.log("divisão: ",x/y);
console.log("resto:",x%y);
console.log("exponenciação: ", x**y);

console.log(" ");
console.log("===================EXPREÇÕES==================");
console.log("Igual: ",x == y);
console.log("Estritamente igual: ",x === y);
console.log("Diferente de: ", x != y);
console.log("Estritamente diferente:",x !== y);
console.log("Maior que: ",x > y);
console.log("Menor que: ",x < y);

console.log(" ");
console.log("===============Operadores Lógicos==================");
console.log("AND: ",true && false);
console.log("OR: ", true || false);
console.log("NOT: ", !true);
///////////////////////////////////////////////////

let nota1 = 56;
let nota2 = 92;

console.log("==================== IF ELSE =====================");
console.log(`Nota: ${nota1}`);
if(nota1 >= 70){
    console.log("Aprovado!!");
}else if(nota1 >=50 && nota1 < 70){
    console.log("Recuperação");
}else{
    console.log("Reprovado");
}

console.log("==================== SWITCH =====================");

let mes = 9;

console.log("Número do mês que quero:",mes);

switch(mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;

    default:
        console.log("Nenhum mês foi escolhido...");
}

console.log("========================= WHILE ====================");

let n = 0;
console.log("Números Pares: ");
while (n <= 20){
    if(n%2 === 0){
        console.log(n);
    }
    n++; 
}

console.log("================ Cidades =============");

const cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Curitiba"];

for (let i = 0; i < cidades.length; i++) {
  console.log(cidades[i]);
}

console.log("=========== Numero de 10 a 1 =============");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
