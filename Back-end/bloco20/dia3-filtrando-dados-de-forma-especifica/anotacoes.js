// Where -> especifica resultados.

// -- OPERADOR - DESCRIÇÃO
// =   IGUAL
// >   MAIOR QUE
// <   MENOR QUE
// >=  MAIOR QUE OU IGUAL
// <=  MENOR QUE OU IGUAL
// <>  DIFERENTE DE
// AND OPERADOR LÓGICO E
// OR  OPERADOR LÓGICO OU
// NOT NEGAÇÃO
// IS  COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)


// 1 - Precisamos de um relatório dos nomes dos clientes, em ordem alfabética, que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2, e não inclua o cliente KENNETH no resultado. As informações podem ser encontradas na tabela customer

// SELECT * FROM sakila.customer
// WHERE active IS FALSE
// AND store_id = 2
// AND first_name <> 'KENNETH'
// ORDER BY first_name ASC;

// 2 - O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição (replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film

// SELECT * FROM sakila.film
// WHERE (RATING = 'PG'
// OR rating = 'PG-13')
// AND replacement_cost >= 18.00
// ORDER BY replacement_cost DESC LIMIT 100