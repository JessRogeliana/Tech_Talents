var nomeAlimentos = prompt("Nome do Alimento");

if (nomeAlimentos == "tomate" || nomeAlimentos == "laranja" || nomeAlimentos == "abacaxi" || nomeAlimentos == "limão") {
    var valorSemanaAnterior = parseInt(prompt("Qual o valor da semana anterior?"));
    var valorSemanaAtual = parseInt(prompt("Qual o valor da semana atual?"));
    if (valorSemanaAtual > valorSemanaAnterior) {
        alert("O " + nomeAlimentos + " aumentou: " + (valorSemanaAtual - valorSemanaAnterior) + " reais");
    } else if (valorSemanaAtual < valorSemanaAnterior) {
        alert("O " + nomeAlimentos + " diminuiu: " + (valorSemanaAnterior - valorSemanaAtual) + " reais");
    } else if (valorSemanaAnterior == valorSemanaAtual) {
        alert("Não houve alteração no preço de " + nomeAlimentos);
    }
} else {
    alert(nomeAlimentos + " indisponível na feira");
}