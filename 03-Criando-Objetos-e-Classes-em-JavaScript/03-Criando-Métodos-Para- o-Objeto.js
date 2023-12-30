/*criando método descrever*/

const pessoa = {
    nome:'Iury Monteiro',
    idade: 24,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

pessoa.descrever = function(){
    console.log('meu nome é '+this.nome);
}
pessoa.descrever();

