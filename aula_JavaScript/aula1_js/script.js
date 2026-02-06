function alterarTexto(){
    document.getElementById("titulo").innerText = "Novo Texto";
    alert("Mudar o texto? Clique em Ok....");
}

////////////////////////////////////////////////////////////////

let idade = 19;

console.log("Idade:",idade);

idade = 20;

console.log("Idade:",idade);

///////////////////////////////////////////////////////////

const produto = {
    nome: "PC",
    valor: 2500.99
}

console.log("Constante antes:", produto.nome);

produto.nome = "Celular";

console.log("Constante depois:", produto.nome);
