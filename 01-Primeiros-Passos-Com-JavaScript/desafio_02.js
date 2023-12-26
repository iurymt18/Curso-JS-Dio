/* Faça um programa para calcular o preço de uma viagem.
Você terá 5 variáveis. Sendo elas:
1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - O tipo do combustível que está no veículo;
4 - Gasto médio de combustível do veículo em litros por Km;
5 - Distancia em Km da viagem;

*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = "etanol"
const gastoLitroKm = 10;
const distanciaEmKm = 100;

if (tipoCombustivel == "gasolina"){
let precoViagem = (distanciaEmKm/gastoLitroKm)*precoGasolina;
console.log(precoViagem.toFixed(2));

}else if (tipoCombustivel == "etanol"){
    let precoViagem = (distanciaEmKm/gastoLitroKm)*precoEtanol;
    console.log(precoViagem.toFixed(2));
}
