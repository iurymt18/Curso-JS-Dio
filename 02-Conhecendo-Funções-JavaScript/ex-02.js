/* exercício de preços com função */
/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function verificarPreco(precoEtiqueta, tipoPagamento){
    if (tipoPagamento =="1"){
        let precoFinal = (precoEtiqueta - (precoEtiqueta * 0.10))
        return precoFinal

    }else if (tipoPagamento == "2"){
        let precoFinal = (precoEtiqueta - (precoEtiqueta * 0.15))
        return precoFinal
    
    }else if (tipoPagamento == "3"){
        let precoFinal = precoEtiqueta
        return precoFinal

    }else {
        let precoFinal = (precoEtiqueta + (precoEtiqueta * 0.10))
        return precoFinal

    }
}
console.log(verificarPreco(100,1))
