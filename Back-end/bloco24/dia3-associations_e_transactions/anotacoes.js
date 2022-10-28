// Aprender a focar na modelagem de relações N:N ou muitos-para-muitos, com tabelas intermediárias.

// Uma transação simboliza uma unidade de trabalho indivisível executada do banco de dados de forma independente de outras transações.
// As operações, que são as ações dessa unidade de trabalho não podem ser mescladas com ações de outras transações.
// O conceito de uma unidade de trabalho indivisível é chamado de atomicidade.
// Uma transação de banco de dados relacional, por definição, deve ser atômica, consistente, isolada e durável, conhecida pela sigla ACID:
//  - Atomicidade: todas as operações definidas na transação devem ser concluídas com sucesso. Se algo falhar, a transação inteira falha.
//  - Consistência: Todas as regras do banco de dados devem ser respeitadas, ou seja, estrutura de tabelas, chaves estrangeiras, campos restritos.
//  - Isolamento: uma transação não pode interferir em outra transação. Cada transação deve se comportar de forma totalmente isolada das demais transações do banco de dados.
//  - Durabilidade: uma vez que a transação foi realizada, os dados ali modificados devem ser armazenados de forma permanente, ou seja, só será possível alterá-los cado uma nova transação seja executada posteriormente.

// Existem dois tipos de transações dentro do Sequelize:
// Unmanaged transactions: a transação não é gerenciada, é preciso indicar manualmente a circunstância em que a transação deve ser finalizada ou revertida, ou seja, executar commit ou rollback.
// Managed transactions: o próprio Sequelize gerencia as transações e determina em tempo de execução, quando deve finalizar ou reverter uma transação.

// Relacionamentos N:N
// Existem diferenças significativas ao se criar as associações para este tipo de relacionamento.