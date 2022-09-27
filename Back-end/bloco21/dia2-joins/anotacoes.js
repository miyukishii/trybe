// A ideia do JOIN é permitir combinar registros de duas ou mais tabelas, através do relacionamento que uma tabela tem com a outra.

// INNER JOIN para combinar dados de duas ou mais tabelas;
// LEFT JOIN e RIGHT JOIN para combinar dados de duas ou mais tabelas;
// SELF JOIN para fazer join de uma tabela com ela própria.

// sintaxe de INNER JOIN
// SELECT t1.coluna, t2.coluna
// FROM tabela1 AS t1
// INNER JOIN tabela2 AS t2
// ON t1.coluna_em_comum = t2.coluna_em_comum;

// EX: Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
// SELECT act.actor_id, act.first_name, f.film_id
// FROM sakila.actor AS act
// INNER JOIN sakila.film_actor AS f
// ON act.actor_id = f.actor_id;

// EX: Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.

// SELECT stf.first_name, stf.last_name, ad.address
// FROM sakila.staff AS stf
// INNER JOIN sakila.address AS ad
// ON stf.address_id = ad.address_id;