// Tipos de dados:

// Texto - varchar, text, char
// número - integet, decimal, bignt, tinyint
// booleano - true, false
// data - date, time, timezona

// Diagrama de relacionamentos - mostra um mapa de ligações entre tabelas.

// Para criar um banco de dados e tabelas também utilizamos SQL.
// 


// Desafio da aula:

// Identificar informações: 
// - título
// - autor
// - categoria
// - cliente
// - histórico de leitura

//Premissas: 
// Cada livro deve possuir 1 autor;
// Cada pessoa autora pode ter vários livros;
// 1 Categoria pode pertencer a vários livros;
// 1 Cliente pode ter vários livros
// 1 Livro pode ter sido lido por vários clientes;

// Etapas para solução: 

// 1 - Identificar entidades, atributos e relacionamento com base na descrição do problema:
//   * entidades(tabelas do banco): título do livro, autor, categoria, cliente, aluguel dos livros(histórico).
//   * atributos(coluna de cada tabela): id, nome, data_lancamento, idioma, editora,
//   *relacionamentos(identificados e não identificados): autor com livro; cliente e aluguel;

// Antes de criar as tabelas, precisamos criar um banco de dados com o comandos:
// CREATE DATABASE <nome-do-banco>; ou  CREATE SCHEMA <nome-do-banco>;

// DROP DATABASE livraria; (perigoso para deletar database)

// Crie tabela com o comando:
// CREATE TABLE categorias (
//   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
//   nome VARCHAR(100) NOT NULL
// );

// NORMALIZAÇÂO de banco ou tabela
// É uma forma de diminuir as redundâncias que existem no banco de dados, tirando espaço e evitando anomalia de inserção, anomalia de atualização, anomalia de exclusão.

// 1Forma Normal: ver se os valores de cada coluna possuem uma padronização de valores ( só string, numero..)
// 2 FOrma normal:
// 3 Forma normal: