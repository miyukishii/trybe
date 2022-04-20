// 1)Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.

/*const a = 4;
const b = 9;

//Adição (a + b)
console.log(a+b);

//Subtração (a - b)
console.log(a-b);

//Divisão (a / b)
console.log(a/b);

//Módulo (a % b)
console.log(a%b);

*/

// 2) Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

/*const a = 3;
const b = 6;

if(a>b){
    console.log(a);
}else{
    console.log(b);
}
*/

// 3) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const a = 7;
// const b = 4;
// const c = 2;

// if(a>b && a>c){
//     console.log(`O maior valor entre as três constantes é o valor ${a}`);
// }else if (b>a && b>c){
//     console.log(`O maior valor entre as três constantes é o valor de ${b}`);
// }else{
//     console.log(`O maior valor entre as três constantes é o valor de ${c}`);
// }

// 4) Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const a = -2;
// if(a>0){
//     console.log("positive");
// }else if(a<0){
//     console.log("negative");
// }else{
//     console.log("zero");
// }

// 5) Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// const a = 30;
// const b = 45;
// const c = 105;

// if(a+b+c === 180) {
//     console.log("true");
// }else {
//     console.log("false");
// }

// 6)Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// let piece = "THE KING";
// let pecaXadrez = piece.toLowerCase();
// switch(pecaXadrez) {
//     case "the king":
//     console.log("any direction, one square");
//     break;

//     case "the queen":
//     console.log("diagonals,down or up vertically, left or right hortizontally, move as many squares as it likes");
//     break;

//     case "the pawn":
//     console.log("can move forward one or two squares");
//     break;

//     case "the bishop":
//     console.log("move diagonally as many squares as it likes");
//     break;

//     case "the knight":
//     console.log("moves in a L-shape");
//     break;

//     case "the rook":
//     console.log("moves as many squares as it likes left or right horizontally and vertically");
//     break;

//     default:
//         console.log("Error");
// }

// Exercício 7) Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// let percentual = "75%";
// let porcentagem = parseInt(percentual);

// if(porcentagem < 0|| porcentagem > 100){
//     console.log("Error");
// } else if (porcentagem > 90 || porcentagem === 90){
//     console.log("A");
// } else if (porcentagem > 80 || porcentagem === 80){
//     console.log("B");
// } else if (porcentagem > 70 || porcentagem === 70){
//     console.log("C");
// } else if (porcentagem > 60 || porcentagem === 60){
//     console.log("D");
// } else if (porcentagem > 50 || porcentagem === 50){
//     console.log("E");
// } else {
//     console.log("F");
// }

// Exercício 8) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// function even(array){
// for (let index in array) {
//     if(array[index] %2 === 0){
//        return true;
//     }
//   }
//   return false;
// }
// console.log(even([1,3,4]));

// Exercício 9) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

// function odd(array){
// for (let index in array) {
//     if(array[index] %2 === 1){
//        return true;
//     }
//   }
//   return false;
// }
// console.log(odd([2,2,1]));

// Exercício 10) Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// function profit(cost,priceOfSale){
// const costTax = cost*20/100;
// let numOfSales = 1000;
// let profitValue = 0;
//     if(cost<0 || priceOfSale < 0){
//         console.log("Error!");
//     }else{
//        profitValue = (priceOfSale - costTax)*numOfSales;
//     }
//     return profitValue;
// }
// console.log(profit(100,150));

// 11)
// let salary = 3000;
// function netSalary (){
//     if(salary === 1556.94 || salary <1556.94) {
//         let aliquota = 8;
//     }else if(salary === 1556.95 || salary < 1556.95) {
//         aliquota = 9;
//     }
//     }
// }

// 12) Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers);

// 13) Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let resultado = 0;
// for(let index in numbers){
//      resultado += numbers[index];
// }
// console.log(resultado);

// 14) Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let medArit = resultado/numbers.length;
// console.log(medArit);

// 15) Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// if(medArit > 20) {
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menor ou igual a 20");
// }

// 16) Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let maiorValor = numbers[0];
// for(index in numbers) {
//     if(numbers[index] > maiorValor) {
//         maiorValor = numbers[index];
//     }
// }
// console.log(maiorValor);

// 17) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let oddNum = 0;
// let result = 0;
// for(index in numbers){
//     if(numbers[index]%2 === 1){
//         oddNum = oddNum + 1;
//         result = oddNum;
//     }
// }
// if(oddNum < 1){
//     result = "nenhum valor ímpar encontrado";
// }
//  console.log(result);

// 18) Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let menorValor = numbers[0];
// for(index in numbers) {
//     if (numbers[index] < menorValor) {
//         menorValor = numbers[index];
//     }
// }
// console.log(menorValor);

// 19) Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// let arrayNum = [];
// for(i = 1; i < 26; i += 1){
//     arrayNum.push(i);
// }
// console.log(arrayNum);

// 20) Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
// let newArray = [];
// for (let index in arrayNum) {
//     newArray.push(arrayNum[index]/2);
// }
// console.log(newArray);