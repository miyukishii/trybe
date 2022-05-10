//exercício 1 -  Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.//

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//       console.log(elseScope);
//     }
// }
// testingScope(true);

// Exercício 2 //

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// function sortArray (oddsAndEvens) {
//   for (let index = 0; index < oddsAndEvens.length; index += 1) {
//     for (let secondIndex = index +1; secondIndex < oddsAndEvens.length; secondIndex += 1) {
//       if (oddsAndEvens[index] > oddsAndEvens[secondIndex]) {
//         let position = oddsAndEvens[index];
//         oddsAndEvens[index] = oddsAndEvens[secondIndex];
//         oddsAndEvens[secondIndex] = position;
//       }
//     }
//   }
//   return oddsAndEvens;
// }

// console.log(sortArray((oddsAndEvens))); 

// function sortArray (array) {
//     const sortOddsAndEvens = array.sort((a,b) => a -b);
//     return sortOddsAndEvens;
// }
// console.log(`Os números ${sortArray((oddsAndEvens))} se encontram ordenados de forma crescente`);

// Exercicio 3 - fatorial //

// função normal //

// function fatorial (num) {
//     let fatorialNum = num;
//     for (let index = num - 1; index >= 1; index -= 1) {
//         fatorialNum *= index;
//     }
//     return fatorialNum;
// }
// console.log(fatorial(2));

const fatorialNum = num => {
let result = num;
  for (let index = num - 1; index >= 1; index -= 1) {
    result *= index;
  }  
  return result;
}

console.log(fatorialNum(2));