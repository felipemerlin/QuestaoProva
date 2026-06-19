// Uma linha de produção fabril registrou o tempo total de operação de uma máquina em minutos. Crie um script JavaScript que receba esse valor em uma variável chamada tempoMinutos e converta-o para horas inteiras e minutos restantes. Imprima o resultado no console. Exemplo: se a variável contiver 135, deverá imprimir algo equivalente a 2 horas e 15 minutos.

let tempoMinutos = 135;

let horas = (tempoMinutos - (tempoMinutos % 60)) / 60;
let minutosRestantes = tempoMinutos % 60;

console.log(`O tempo total da operação da máquina é de ${horas} horas e ${minutosRestantes} minutos.`);