localStorage.setItem("nome", "João");

setTimeout(() => {
  alert("O nome armazenado é: " + localStorage.getItem("nome"));
}, 10000);

// setInterval(() => {
//     alert("Spam!");
// }, 1000);

function exibirIdade(idade) {
    document.write(`<h1>Idade: ${idade}</h1>`);
}
// Abaixo causará um erro de referência pois a função não foi chamada
exibiRidade(30); // Correto