// //para conseguir acessar propriedades nomeadas com números, como 0 , por exemplo, só é possível usando a notação de colchetes 

// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//     };
    
// console.log(diasDaSemana['1'])

// //Neste exemplo, a chave banco do objeto conta , guarda um outro objeto, e também há o uso de variável na notação de colchetes.

// let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//       nome: 'Jake',
//       sobrenome: 'Peralta',
//       endereco: {
//         rua: 'Smith Street',
//         bairro: 'Brooklyn',
//         cidade: 'Nova Iorque',
//         estado: 'Nova Iorque',
//       },
//     },
//   };
  
//   console.log(usuario['id']); // 99
//   console.log(usuario.email); // jakeperalta@gmail.com
  
//   console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//   console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//   // Agora, e se o nosso objeto está dentro de um array? Como acessamos as propriedades do objeto?

//   let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];
  
//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10
  
//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey

// 1) Crie um objeto player contendo as variáveis listadas abaixo:
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name:"Marta",
    lastName: "Silva",
    age: 34,
    medals: { 
        golden: 2,
        silver: 3,
    }
}
 
// 2) Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

// console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);

// 3) Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log(player);

// 4) Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

// console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes.`)

// 5) Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

// console.log(`A jodagora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`);

// 6) Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for(let name in names) {
//       console.log(`Olá ${names[name]}`);
//   }

// 7) Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for(let index in car) {
//       console.log(index, car[index]);
//   }

// 8) Utilize funções para criar os programas a seguir:

// a) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b.
 
// function operacoesAritmeticas(a,b) {
//     let result = {};   
//     result.addtion = a+b;
//     result.subtraction = a-b;
//     result.multiplication = a*b;
//     result.division = a/b;
//     result.module = a%b;
//        return result;
// }
// console.log(operacoesAritmeticas(2,5));

// 9)  Imprima no console uma mensagem de boas-vindas para a personagem , incluindo seu nome:
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// console.log(`Bem-vinda, ${info.personagem}`);

// 10) Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

// info.recorrente = "Sim";
// console.log(info);

// 11) Faça um for/in que mostre todas as chaves do objeto.

// for(let index in info) {
//     console.log(index);
// }

// 12) Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

// for(let index in info) {
//     console.log(info[index]);
// }

// 13) Defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. 

// let info2 = {
//     personagem: "Tio Patinhas",
//     origem: " Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: "O último MacPatinhas",
//     recorrente: "Sim",
// }

// for(let value in info) {
//     if(
//         value === "recorrente" &&
//         info.recorrente === "Sim" &&
//         info.recorrente === info2.recorrente
//     ) {
//         console.log('Ambos recorrentes');
//     } else {
//         console.log(`${info[value]} e ${info2[value]}`)
//     }
//     }

// 14) Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
// // console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama "${leitor.livrosFavoritos[0].titulo}"`);
 
// 15) Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
// {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }

  // leitor.livrosFavoritos[1] = {
  //   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  //   autor: 'JK Rowling',
  //   editora: 'Rocco',
  // };
//   console.log(leitor);

// 16) Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

// console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);

// 17) Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// https://www.programiz.com/javascript/examples/reverse-string
//First, the string is split into individual array elements using the split() method.
//Seconde, The string elements are reversed using the reverse() method.

// function isPalindrome (word) {
//   let allToLowerCase = word.toLowerCase();
//   let arrayWord = allToLowerCase.split("");
//   let reverseArray = arrayWord.reverse();
//   let reverseWord = reverseArray.join("");
//   if(reverseWord === allToLowerCase) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrome("arara"));

// function biggestNum (num) {
//   let biggestNumber = num[0];
//   let indexOfBiggestNumber = 0;
//   for(let index in num) {
//     if(num[index] > biggestNumber) {
//       biggestNumber = num[index];
//       indexOfBiggestNumber = index;
//     }
//   } return indexOfBiggestNumber;
// }
// console.log(biggestNum([2, 3, 6, 7, 10, 1]));

// 18) Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function smallestNum (arrayNum) {
//   let smallestNumber = arrayNum[0];
//   let indexOfSmallestNumber = 0;
//   for(let value in arrayNum) {
//     if(arrayNum[value] < smallestNumber) {
//       smallestNumber = arrayNum[value];
//       indexOfSmallestNumber = value;
//     }
//   }return indexOfSmallestNumber;
// }
// console.log(smallestNum([2, 4, 6, 7, 10, 0, -3]));

// 19) Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function moreCharacters (names) {
//   let biggestName = names[0];
//   for(let index in names) {
//     if(names[index].length > biggestName.length) {
//       biggestName = names[index];
//     }
//   }return biggestName;
// }
// console.log(moreCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 20) Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function moreRepeat (num) {
//   let timesOfNum = 0;
//   let timesOfRepeat = 0;
//   let numeroRepetido = 0;
//   for(let index in num) {
//     let verificarNum = num[index];
//     for(let index2 in num) {
//       if(verificarNum === num[index2]) {
//         timesOfNum += 1;   
//       }
//     }
//     if(timesOfNum > timesOfRepeat) {
//       timesOfRepeat = timesOfNum;
//       numeroRepetido = num[index];
//     }
//     timesOfNum = 0;
//   }
//   return numeroRepetido;
// }
// console.log(moreRepeat([2, 3, 2, 5, 8, 2, 3]));

// 20) Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// function addAll (num) {
//   let soma = 0;
//   for (let index = 1; index <= num; index += 1) {
//     soma = soma + index;
//   }
//   return soma;
// }
// console.log(addAll(10));

// 21)  Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra (word,ending) {
  for(let index = 0; index < ending.length; index += 1) {
    if(word[word.length - ending.length + index] === ending[index]) {
      return  true;
    } else {
      return false;
    }
  }
}
console.log(verificaFimPalavra("trybe", "be"));