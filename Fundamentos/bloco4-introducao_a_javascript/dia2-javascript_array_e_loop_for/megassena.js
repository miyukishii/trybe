//Como fazer um jogo da mega até conferir o resultado?

// Escolhe 6 números de 1 a 60;
// Sorteio;
// Conferir resultado;
// Se der bom, comemorar!

let numJogo = [7,10,27,39,43,53];
let numSorteio = [7,16,44,25,43,53];
let acertos = 0;

for(let a = 0; a < numJogo.length; a += 1){
    for(let b = 0; b < numSorteio.length; b += 1) {
        if(numJogo[a]=== numSorteio[b]) {
            acertos +=1;
        }
    }
}
console.log(acertos);
