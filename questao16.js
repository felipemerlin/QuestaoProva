// Escreva um código em JavaScript que utilize um laço de repetição while para calcular a soma de todos os números inteiros pares compreendidos no intervalo fechado de 10 até 50 (inclusive). Exiba o resultado final dessa soma acumulada no console.

let soma = 0;
let numero = 10;

while (numero <= 50) {
    if (numero % 2 === 0) {
        soma += numero;
    }
    numero++;
}

console.log(`A soma dos números inteiros pares de 10 a 50 é: ${soma}`);