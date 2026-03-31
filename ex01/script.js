let Numero = Number(prompt("Insira um número:"));
let Idade = Number(prompt("Insira sua idade:"));
let NumberPar = Number(prompt("Digite um número:"));
let Valor = Number(prompt("Insira o valor da Compra:"));
let numCinco = Number(prompt("Insira om numero qualquer"))


if (Numero > 0){
    alert("Número Positivo")

}

if (Idade >= 18){
    alert("Voçê é maior de idade!")

}

if (NumberPar % 2 === 0){
    alert("O número é PAR!")
}

if (Valor >= 100){
    let desconto = Valor *0.10
    let valorFinal = Valor - desconto
    alert("Voçê ganhou um desconto de 10%");
    alert("Valor do desconto:" + desconto);
    alert("Valor final:" + valorFinal);
}

if (numCinco % 5 === 0){
    alert("O número é multiplo de 5.")
}