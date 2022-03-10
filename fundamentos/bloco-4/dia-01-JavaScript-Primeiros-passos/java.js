//1 Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b ,
//definidas no começo com os valores que serão operados. Faça programas para

//adição
let num1 = 15;
let num2 = 20;
let soma = 0;
console.log(soma = num1 + num2); 

//subtração
let num1 = 15;
let num2 = 20;
let subtração = 0;
console.log(soma = num1 - num2);

//multiplicação
let num1 = 15;
let num2 = 20;
let multiplicacao = 0;
console.log(soma = num1 * num2);

//divisão
let num1 = 15;
let num2 = 20;
let divisao = 0;
console.log(soma = num1 / num2);

//módulo
let num1 = 30;
let num2 = 7;
let subtração = 0;
console.log(soma = num1 % num2);

//2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com 
//os valores que serão comparados.

const valor1 = 5;
const valor2 = 8;
if (valor1 > valor2){
    console.log("Valor 1 é maior!");
} else {
    console.log("Valor 2 é maior!");
}

//3 Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com 
//os valores que serão comparados.

const valor1 = 77;
const valor2 = 9;
const valor3 = 7;
if (valor1 > valor2 && valor1 > valor3){
    console.log("Valor 1 é o maior!");
} else if (valor2 > valor1 && valor2 > valor3){
    console.log("Valor 2 é o maior!")
} else {
    console.log("Valor 3 é o maior!");
}

//4 Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for 
//positivo, "negative" se for negativo e "zero" caso contrário.

const valor = -5;
if (valor < 0){
    console.log("negativo");
}   else if (valor > 0){
    console.log("positivo");
}   else {
    console.log("zero");
}

//5 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne 
//true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido
//o programa deve retornar uma mensagem de erro.

const ladoA = 60;
const ladoB = 60;
const ladoC = 60;
if (ladoA < 0 || ladoB < 0 || ladoC < 0){
    console.log("ERRO");
}   else if (ladoA + ladoB + ladoC === 180){
    console.log("True");
} else {
    console.log("False");
}

//6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let text = 'Peão';
let pecaMinuscula;
pecaMinuscula = text.toLowerCase();
    switch(pecaMinuscula){
        case 'cavalo':
            console.log("O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
            break

        case 'peão':
            console.log("O peão anda uma casa pra frente (pode andar duas casas na primeira jogada).");
            break

        case 'torre':
            console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.")
            break

        case 'bispo':
            console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
            break

        case 'rainha':
            console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
            break

        case 'rei':
            console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
            break

        default:
            console.log("Erro. Peça não identificada.")
    }

//7 Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas 
//regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

let nota = 55;
if (nota > 100 || nota < 0){
    console.log("ERRO");
} else if (nota >= 90){
    console.log("A");
} else if (nota >= 80){
    console.log("B");
} else if (nota >= 70){
    console.log("C");
} else if (nota >= 60){
    console.log("D");
} else if (nota >= 50){
    console.log("E");
} else {
    console.log("F");
}

//8 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for
//par. Caso contrário, ele retorna false . 

const num1 = 8;
const num2 = 2;
const num3 = 2;
if (num1 % 2 == 1 && num2 % 2 == 1 && num3 % 2 == 1){
    console.log("False");
} else {
    console.log("True");
}

//9 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for 
//ímpar. Caso contrário, ele retorna false .

const num1 = 5;
const num2 = 2;
const num3 = 2;
if (num1 % 2 == 0 && num2 % 2 == 0 && num3 % 2 == 0){
    console.log("False");
} else {
    console.log("True");
}

//10 Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e 
//seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) 
//a empresa terá ao vender mil desses produtos.

const compra = 1;
const venda = 200;
var valorCustoTotal;
var lucro;
valorCustoTotal = compra + (compra * 0.2);
lucro = venda - valorCustoTotal;
if ( compra < 0 || venda < 0){
    console.log("ERRO");
} else {
    console.log(lucro);
}

//11 
