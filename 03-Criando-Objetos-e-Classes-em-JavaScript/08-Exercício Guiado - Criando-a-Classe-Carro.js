/*Crie uma classe para representar carros.
os carros possuem marca, uma cor e um gasto medio de combustível por KM rodado
crie um método que dado oa quantidade de quilometros e o preço do combustível nos
dê o valor gasto em reais no percurso.*/ 

class Carro{
    marca;
    cor;
    consumo;

    constructor(marca,cor,consumo){
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;

    }

    verificarGastoPercurso(distancia, precoCombustivel) {
        const valorGasto = (distancia / this.consumo)*precoCombustivel;
        return valorGasto;
    }
}

const uno = new Carro('Fiat', 'preto', 12);
console.log(uno)
console.log(uno.verificarGastoPercurso(70,5));

const palio = new Carro('Fiat', 'peto', 10);
console.log(palio)
console.log(palio.verificarGastoPercurso(70,5));

