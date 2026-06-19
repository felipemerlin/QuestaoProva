// Em um estudo de tempos e métodos (Cronoanálise) em uma linha de manufatura do SENAI, registrou-se o tempo gasto por um operador para concluir uma tarefa em 5 ciclos consecutivos. Os tempos em segundos foram: 45, 48, 52, 44 e 46. Escreva um script completo em JavaScript que simule o processaento desses dados. O script deve:
// 1. Calcular a média de tempos desses ciclos.
// 2. Identificar qual foi o maior tempo e qual foi o menor tempo registrado.
// 3. Aplicar uma tolerância de 10% sobre a média calculada (multiplicar a média por 1.10) para definir o chamado "Tempo Padrão" da operação. Exiba todos os resultados formatados.

let tempo1 = 45
let tempo2 = 48
let tempo3 = 52
let tempo4 = 44
let tempo5 = 46

let media = (tempo1 + tempo2 + tempo3 + tempo4 + tempo5) / 5
let tempoPadrao = 258.5

console.log(`Á média foi: ${media}, o maior tempo foi: ${tempo3}, o menor tempo foi: ${tempo4} e o tempo padrão foi ${tempoPadrao}`) 