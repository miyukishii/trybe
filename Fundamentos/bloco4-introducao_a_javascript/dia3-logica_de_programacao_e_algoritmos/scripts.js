// 1)crie um algoritmo que retorne o fatorial de 10.

// let fatorial = 4;
// let n = 4;
// for (i=n-1; i>=1;i-=1) {
//     fatorial *= i;
// }
// console.log(fatorial);

// 2)Desenvolva um algoritmo que é capaz de inverter uma palavra.

// let word = "tryber";
// let inverWord = "";
// for(i=word.length-1;i>=0;i-=1){
//     inverWord += word[i];
// }
// console.log(inverWord);

//3) Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maior = array[0];
// let menor = array[0];

// for(index=1;index<array.length;index+=1) {
//     if(array[index].length > maior.length) {
//         maior = array[index];
//     }
// }
// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length < menor.length) {
//       menor = array[index];
//     }
// }
// console.log(maior);
// console.log(menor);

// 4) Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorPrimo = 0;

for (index=0;index<=2;index+=1) {
    if(index/1 === index && index>maiorPrimo) {
        maiorPrimo = index;
    }
    
}
console.log(maiorPrimo);