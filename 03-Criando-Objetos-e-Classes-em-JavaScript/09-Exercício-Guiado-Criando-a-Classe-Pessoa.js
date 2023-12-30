/*Crie uma classe para representar pessoas.
para cada pessoa teremos atributos nome, peso e altura
as pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso /(altura*altura));
as instancie uma pessoa chamada José que tenha 70kg de peso, e 1,75 de altura e peça ao José para
dizer o valor do seu IMC */

class Pessoa{
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }
    dizerImc(){
        const imc = this.peso / (this.altura * this.altura)
        return imc
    }
    classificarImc(){
        const imc = this.dizerImc();
        
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obsedidade Grave';
        }
        
    }

}
const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log(jose.dizerImc());
console.log(jose.classificarImc());


