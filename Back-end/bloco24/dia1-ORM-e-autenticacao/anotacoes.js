// Introdução - Node.js: ORM e Autenticação

// O que vamos aprender?
// Aprender a gerar interfaces com o banco de dados de modo mais simples, o chamado ORM - Interface da aplicação com o banco de dados.
// Aprimorar conhecimento sobre segurança nas APIs, utilizando novos métodos de autenticação para determinadas requisições, utilizando o JWT!


// ORM (Object-Reational Mapping)
// Prevê uma mais de alterar e interagir com um banco de dados por meio de código JavaScript. A partir dele, é possível criar e alterar tabelas, realizar consultas, inserir e extrair dados do banco, tudo isso apenas escrevendo código JavaScript.
// Aprender ORM torna o código menos propenso a error.
// As bibliotecas que trabalham com ORM, como o Sequelize, abstraem as funções do banco de dados, essas bibliotecas ocultam parte da complexidade dessas funções e as envelopam numa função de uso mais ágil e intuitivo.
// É uma tecnica que permite fazer mapeamento estrutural entre as entidades dos bancos de dados e o objetos que as representam no código JS.
// Com o ORM não precisamos mais escrever uma query SQL "crua" para cada vez que formos inserir um registro na tabela. Apenas passamos o objeto JS para ela e ela insere os dados no banco de dados.
// No Node.js temos o Sequelize, uma biblioteca de ORM com suporte aos bancos de dados MySQL.

// Mapeamento
// No mercado de trabalho existem dois padrões de projeto que são mais utilizados para fazer o mapeamento entre entidades de banco de dados e os objetos que as representam no código.
// - Data Mapper: a classe que representa a tabela do banco de dados deve conhecer os recursos necessários para realizar as transações com o banco de dados, mas a classe que representa cada registro na tabela não deve saber nada do banco.
// - Active Record: a classe que representa os registros conhece os recursos necessários para realizar as transações no banco de dados.

// Sequelize:
// A maioria dos métodos fornecidos pelo Sequelize são assíncronos, portanto retornam promises. 
// Podemos utilizar o then, catch para tratar os retornos, ou utilizar async e await.

// Etapas para implementação do Sequelize no projeto:
// 1 - Instalar Sequelize
// 2 - Inicializar Sequelize
// 3 - Conectar ao banco de dados
// 4 - Model
// 5 - Migrações
// 6 - Operadores

// boilerplates são trechos de código que podem ser reutilizados em muitos lugares com pouca ou nenhuma alteração.

// O arquivo index.js dentro da pasta models possui um papel muito importante de estabelecer uma instância de conexão entre os arquivos presentes na pasta model e o banco de dados relacional utilizado.

// Os models são a essência do Sequelize.

// Uma migration é uma forma de versionar o schema do banco de dados.
// Cada migration conterá um pedaço de código que representa o histórico das alterações feitas no nosso banco de dados.

// Seeders
// Toda vez que executamos as migrations, nosso banco de dados é criado do zero, ou seja, sem dados dentro da tabela.
// Podemos confiurar nosso banco para ser automaticamente criado e povoado.