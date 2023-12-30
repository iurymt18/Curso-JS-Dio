/*criando método descrever*/

const pessoa = {
    nome:'Iury Monteiro',
    idade: 24,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

const atributo = 'idade';

console.log(pessoa[atributo]);

pessoa['nome'] = 'teste'; 
