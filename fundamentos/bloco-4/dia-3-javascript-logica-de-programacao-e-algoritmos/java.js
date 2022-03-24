//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// modo prático pra chegar no fatorial de um numero.
//Porém não segue o conceito matemático.
let fatorial = 10;
let resultado = fatorial;
for (let i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado);


// aqui um script mais completo e que segue o conceito matemático.
function calcularFatorial (fatorial) {
    if (isNaN(fatorial)) {
        return 'Não existe fatorial de um texto';
    }
     
    if (!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }
     
    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }
     
    let resultado = fatorial;
    let primeiroMultipicador = fatorial - 1;
    for (let i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }
     
    return resultado;
}
 
console.log(calcularFatorial(10));
// explicação retirada de: https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript


//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let fruta = "tryber";
let inverter = "";
    for (let i = fruta.length - 1; i >= 0; i-- ){
        inverter += fruta[i];
}
    console.log(inverter);

//3- Considere o array de strings abaixo:
let array = ['java', 'javascript', 'html', 'css', 'python'];
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let maior =[]
for (let i = 0; i < array.length; i++){
    if ( array[i]> maior){
        maior = array[i];
    }
}   console.log(maior);


