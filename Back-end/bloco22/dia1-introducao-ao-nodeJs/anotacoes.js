// para iniciar um projeto em node:
// npm init -y 


// O Node.js é um interpretador do JS criado a partir do V* que é um interpretador utilizado pelo Google Chrome.
// A cada dia, mais empresas vêm utilizando o Node para desenvolver suas aplicações back-end.
// O JavaScript que é uma linguagem utilizado pela ferramenta, permite um tempo de aprendizado relativamente menor.

// Por que usar o Node.js?
// É o primeiro ambiente que suporta JS tanto do lado cliente quando o lado servidor.
// o Node.js permite escrever softwares servidores de requisições HTTP de forma muito mais eficiente.
// Node.js realiza todas as suas operações de entrada e saída de dados de forma assíncrona.
// O node.js é uma tecnologia, em geral, mais barata que suas concorrentes.

// Módulo em NOde.js:
// É um "pedaço de código", o qual pode ser organizado em um ou mais arquivos, que possui escopo próprio. Ou seja, suas variáveis, funcções, classes e afins só estão disponíveis nos arquivos que fazem parte daquele módulo.

// Tipos de módulos:
// * módulos internos: ou core modules, são inclusos no Node.js e instalados junto com ele quando baixamos o runtime;
//    - fs: fornece uma API para interagir com o sistema de arquivos de forma geral.
//    - url: provê utilitários para ler e manipular URLs;
//    - util: oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.
//    - os: oferece ferramentas e funcionalidades relacionadas ao sistema operacional.
// * módulo locais: são aqueles definidos jutamente à nossa aplicação.
// * módulo de terceiros: são aqueles criados por outras pessoas desenvolvedoras e disponibilizados por meio do npm.

// O NPM é o site que publicamos nossos pacotes e npm é a ferramenta de linha de comando que realiza o gerenciamento desses pacotes para nós.

//No CommonJS as palavras-chaves utilizadas para importação e exportação de módulos são, respectivamente, require() e module.exports.

// brlValue.js
// const brl = 5.37;

// const usdToBrl = (valueInUsd) => valueInUsd * brl;

// module.exports = {
//   brl,
//   usdToBrl,
// };

// index.js
// const brlValue = require('./brlValue');

// console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }

// console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
// console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7