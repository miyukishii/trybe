// Exercício 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// console.log(numbers);

// Exercício 2

// let sum = 0;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(index=0; index<numbers.length; index +=1) {
//     sum += numbers[index];
// }
// console.log(sum);

// Exercício 3

// let medArit = [];
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// for( index =0; index<numbers.length; index +=1) {
//     sum += numbers[index];
//     medArit = sum/numbers.length;
// }
// console.log(medArit);

// Exercício 4

// let medArit = [];
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// for( index =0; index<numbers.length; index +=1) {
//     sum += numbers[index];
//     medArit = sum/numbers.length;
// }
// if (medArit>20) {
//     console.log("valor maior que 20");
// }else {
//     console.log("valor menor ou igual a 20");
// }

// Exercício 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorValor = 0;
// for( index =0; index<numbers.length; index +=1) {
//     if(numbers[index] > maiorValor) {
//         maiorValor = numbers[index];
//     }
// }
// console.log(maiorValor);

// Exercício 6 

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numImpar = 0;
// for( index =0; index<numbers.length; index +=1) {
//     if(numbers[index]%2 != 0) {
//         numImpar += 1;
//     }
// }
//  if(numImpar === 0){
//      console.log("nenhum valor ímpar encontrado");
// }else {
//         console.log(numImpar);
// }

// Exercício 7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorValor = numbers[0];
// for( index =1; index<numbers.length; index +=1) {
//     if(numbers[index] < menorValor) {
//         menorValor = numbers[index];
//     }
// }
// console.log(menorValor);

// Exercício 8

// let numbers = [];
// for(let index=1; index<=25;index+=1){
//     numbers.push(index);
// }
// console.log(numbers);

// Exercício 9

// let divisao = [];
// let numbers =[ 1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// for (index = 0; index<numbers.length; index+=1) {
//     divisao.push(numbers[index]/2);
// }
// console.log (divisao);

// Exercício Bônus 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//         } 
//     }
//   }
//   console.log(numbers);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     for (let secondIndex = index+1; secondIndex < numbers.length; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//         } 
//     }
//   }
//   console.log(numbers);

// Exercício Bônus 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//         } 
//     }
//   }
//   console.log(numbers);

//Exercício Bônus 3 

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbersMultiplicado=[];
// for (index = 0, secondIndex = index +1; index < numbers.length-1, secondIndex < numbers.length; index += 1, secondIndex +=1) {
//          numbersMultiplicado.push(numbers[index]*numbers[secondIndex]);
// }
// numbersMultiplicado.push(numbers[numbers.length-1]*2);
// console.log(numbersMultiplicado);



 