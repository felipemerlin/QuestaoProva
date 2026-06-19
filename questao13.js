// Desenvolva um código em JavaScript que receba a velocidade medida de um veículo industrial em uma variável velocidade. Se a velocidade for estritamente superior a 80 (limite da via), armazene em uma variável o valor de uma multa calculada como: R$ 5,00 por cada km/h acima do limite. Se nao ultrapassar, a multa deve ser zero. Mostre o valor final da multa no console.

let velocidade = 90;
let multa = 0;

if (velocidade > 80) {
    multa = (velocidade - 80) * 5;
}

console.log(`O valor da multa é: R$ ${multa}`);