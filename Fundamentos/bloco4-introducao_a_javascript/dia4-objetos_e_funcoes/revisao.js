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

let pecaXadrez;
switch(pecaXadrez) {
    case "The King":
    console.log("any direction, one square");
    break;

    case "The Queen":
    console.log("diagonals,down or up vertically, left or right hortizontally, move as many squares as it likes");
    break;

    case "The pawn";
    console.log("any direction, one square");
    break;

    case "The bishop";
    console.log("any direction, one square");
    break;

    case "The knight";
    console.log("any direction, one square");
    break;

    case "The rook";
    console.log("any direction, one square");
    break;
}