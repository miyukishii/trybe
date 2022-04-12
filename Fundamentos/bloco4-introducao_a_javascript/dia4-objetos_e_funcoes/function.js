// 1- Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// function ehPalindromo(palavra) { 
// let palavraNormal = "";
// let palavraInverso = "";  
// for(i=0; i<palavra.length; i+=1) {
//     palavraNormal += palavra[i];
// }
// for(a=palavra.length-1; a>=0; a-=1) {
//     palavraInverso += palavra[a];
// }
// if(palavraNormal===palavraInverso) {
//     console.log("true");
// }else {
//     console.log("false");
//      }
// }

// ehPalindromo("ana");

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor

// function indiceMaiorValor (numeros) {
// let maiorValor = 0;
// let resultado = 0;
//     for(i=0; i<numeros.length; i+=1) {
//         if(numeros[i]>maiorValor) {
//              maiorValor = numeros[i];
//              resultado = i;
//         }
//     }
//     return resultado;
// }

// console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));

// 3 -

function indiceMenorValor (numeros) {
    let menorValor = 0;
    let resultado = 0;
        for(i=0; i<numeros.length; i+=1) {
            if(numeros[i]<menorValor) {
                 menorValor = numeros[i];
                 resultado = i;
            }
        }
        return resultado;
    }
    
    console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));
    
