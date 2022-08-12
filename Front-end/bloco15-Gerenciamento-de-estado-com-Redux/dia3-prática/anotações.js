// o Redux é uma ferramenta importante na vida de um desenvolver front-end.

// array: eu atualizo ou faço uma cópia?
// Nunca podemos alterar o estado do nosso componente diretamente, deve fazer através da função setState();
// No Redux não só pode atualizar o estado da store, como nem pode atualizar. Só pode interagir com o estado através do Reducer, sendo que o que o reducer faz não é atualizar o estado atual, e sim fazer uma cópia, e fazer as alterações e retornar o novo estado.
// imutabilidade do estado da aplicação, deve-se usar funções que criam um novo array, sem alterar o array antigo, ou seja, fazem clonagem.
// Outra maneira de trabalharmos com imutabilidade de arrays é com um conceito visto no módulo de fundamentos: o spread operator. 

const itemPrimario = [1, 2, 3, 4, 5, 6];
let spreadTeste = [...itemPrimario, 7];
console.log(spreadTeste); // [1, 2, 3, 4, 5, 6, 7]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]