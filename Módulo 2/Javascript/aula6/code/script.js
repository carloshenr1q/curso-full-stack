function calc(operacao){
    let num1, num2, resultado;
    switch(operacao) {
        case "1":
            num1 = Number(prompt("Digite o primeiro número:"));
            num2 = parseFloat(prompt("Digite o segundo número:"));
            resultado = num1 + num2;
            document.body.innerHTML = `<h1>Resultado da soma: ${resultado}</h1>`;
            break;
        case "2":
            num1 = Number(prompt("Digite o primeiro número:"));
            num2 = Number(prompt("Digite o segundo número:"));
            resultado = num1 - num2;
            document.body.innerHTML = `<h1>Resultado da subtração: ${resultado}</h1>`;
            break;
        case "3":
            num1 = Number(prompt("Digite o primeiro número:"));
            num2 = Number(prompt("Digite o segundo número:"));
            resultado = num1 * num2;
            document.body.innerHTML = `<h1>Resultado da multiplicação: ${resultado}</h1>`;
            break;
        case "4":
            num1 = Number(prompt("Digite o primeiro número:"));
            num2 = Number(prompt("Digite o segundo número:"));
            if (num2 !== 0) {
                resultado = num1 / num2;
                document.body.innerHTML = `<h1>Resultado da divisão: ${resultado}</h1>`;
            } else {
                alert("Divisão por zero não é permitida.");
            }
            break;
        default:
            alert("Operação inválida.");
    }
}

calc(prompt("Digite a operação 1 p/ soma, 2 p/ subtracao, 3 p/ multiplicacao, 4 p/ divisao):"));