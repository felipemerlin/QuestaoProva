// Crie um script em JavaScript para classificar a eficiência energética de um motor elétrico industrial. O script lerá a variável consumoKwm e o fatorPotencia. Se o fator de potência fr menor que 0.92, imprima "Alerta: Fator de Potência Crítico". Se for normal (=> 0.92), analise o consumo: consumo abaixo de 500 kWh ganha classificação "Selo Verde", entre 500 e 1000 kWh classificação "Selo Amarelo", e cima de 1000 kWh classificação "Selo Vermelho".

let consumoKwm = 750;
let fatorPotencia = 0.95;

if (fatorPotencia < 0.92) {
    console.log("Alerta: Fator de Potência Crítico");
} else {
    if (consumoKwm < 500) {
        console.log("Classificação: Selo Verde");
    } else if (consumoKwm >= 500 && consumoKwm <= 1000) {
        console.log("Classificação: Selo Amarelo");
    } else {
        console.log("Classificação: Selo Vermelho");
    }
}