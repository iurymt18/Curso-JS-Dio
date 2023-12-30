function escrevaNome(nome){
    console.log('meu nome é ' + nome);


}


function verificarIdade(idade){
    if (idade<18){
        return 'menor de idade'
    }else{
        return 'maior de idade'
    }

}
escrevaNome('Iury');
console.log(verificarIdade(23))

