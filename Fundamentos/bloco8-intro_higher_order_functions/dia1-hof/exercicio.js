// Exercício 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. //

const idGenerator = (fullName) => {
    const email1 = `${fullName.replace(' ','_').toLowerCase()}@trybe.com`;
    return {nomeCompleto: fullName, email: email1 };
};

const newEmployees = (fullName, callback) => id = callback(fullName);

//   console.log(newEmployees('Miyuki Ishii', idGenerator));
//   console.log(newEmployees('Maria da Silva Oliveira', idGenerator));

// Exercício 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). //
// Gerando um número inteiro aleatório entre dois valores, inclusive. => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random //

const checkNumber = (myNumber, number) => myNumber === number;
    

const lotteryResult = (myNumber,callback) => {
    const number = Math.floor((Math.random() * 5) + 1); 
    console.log(number);
    if (callback(myNumber, number) === true) {
        return 'Parabéns, você ganhou!';
    } else { 
        return 'Tente novamente.';
    }
};

// console.log(lotteryResult(3, checkNumber));

// Exercício 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.


const compareAnswer = (correctAnswer, myAnswer) => {
    if (myAnswer === correctAnswer) {
        return 1;
    } else if (myAnswer === 'N.A') {
        return 0;
    } else {
        return -0.5;
    }
};

const totalPoints = (answerKey, myAnswer, callback) => {
    let points = 0;
    for (let index = 0; index < answerKey.length; index += 1) {
        const addPoints = callback(answerKey[index], myAnswer[index])
        points += addPoints;
    }
    return `O total de pontos é ${points}`;
};

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(totalPoints(gabarito, student, compareAnswer));

// const compareArrays = (array1, array2) => {
//     let points = 0;
//     for (let index = 0; index < array1.length; index += 1) {
//         if (array2[index] === array1[index]) {
//             points += 1;
//         } else if (array2[index] === 'N.A') {
//             points += 0;
//         } else {
//             points += -0.5;
//         }
//     }
//     return points;
// };

// const totalPoints = (answerKey, myAnswer, callback) => {
//     return callback(answerKey,myAnswer);
// };

// console.log(totalPoints(gabarito, student, compareArrays));




