/*criando pessoa com construtor*/

class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
        
    }



    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);

    }
}


const iury = new Pessoa('Iury Monteiro', 24);

const renan = new Pessoa('Renan Guerra', 30);

iury.descrever();
renan.descrever();
