// Crie um script em JavaScript que simule uma máquina automática de bebidas utilizando a estrutura switch..case. O código deve ler um número inteiro de uma variável chamada opcaoBebida. Se for 1, imprima "Café Espresso"; se for 2, "Cappuccino"; se for 3, "Chocolate Quente"; se for 4, "Chá Carioca". Qualquer outro valor inserido deve acionar o bloco default imprimindo "Opção Inválida". Não se esqueceça das palavras-chave de interrupção de escopo.

let opcaoBebida = 5;

switch (opcaoBebida) {
    case 1:
        console.log("Café Espresso");
        break;
    case 2:
        console.log("Cappuccino");
        break;
    case 3:
        console.log("Chocolate Quente");
        break;
    case 4:
        console.log("Chá Carioca");
        break;
    default:
        console.log("Opção Inválida");
        break;
}