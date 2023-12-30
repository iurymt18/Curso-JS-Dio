/*criando classe pessoa*/

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);

    }
}


const iury = new Pessoa();
iury.idade = 24
iury.nome = 'Iury Monteiro'

const renan = new Pessoa();
renan.idade = 30;
renan.nome = 'Renan Guerra';

iury.descrever();
renan.descrever();
