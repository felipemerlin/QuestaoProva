// Utilizando a estrutura de repetição for em JavaScript, codifique um algoritmo que mostre na tela a tabuada de multiplicação completa do número 7, variando o multiplicaor de 1 até 10, no formato visual: "7 x i = resultado".

for (let i = 1; i <= 10; i++) {
    let resultado = 7 * i;
    console.log(`7 x ${i} = ${resultado}`);
}