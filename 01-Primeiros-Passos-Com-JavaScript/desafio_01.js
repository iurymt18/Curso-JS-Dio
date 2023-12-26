/* Faça um programa para calcular o preço de uma viagem.
Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do veículo por Km;
3 - Distancia em Km da viagem;

*/

console.log("ok")

const precoCombustivel = 5.79;
const gastoLitroKm = 12;
const distanciaEmKm = 1580;

let precoViagem = (distanciaEmKm/gastoLitroKm)*precoCombustivel;

console.log(precoViagem.toFixed(2));