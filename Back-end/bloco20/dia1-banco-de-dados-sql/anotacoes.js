// Análise de dados é indispensável para empresas e pessoas em processo de tomada de decisão. É uma maneira eficiente de gerar conhecimento.

// API (Application Programming Interface) É a entidade que recebe requisições do Front-End, busca no banco pelos dados necessários e os processa em informações que são retornadas para o Front-End.

// Tipos de banco de dados:
// Banco de dados relacionais: armazenam os dados em tabelas pre-definida, sem alterações dinâmicas, previsível, usa a linguagem SQL.
// Banco de dados não relacionais: estrutura pré-definida não obrigatório, não possui linguagem oficional.

// O SQL (Structured Query Language) é uma linguagem mais usada para criar, pesquisar, extrair e também manipular dados dentro de um banco de dados relacional.
// Todas as pequisas realizadas dentro de um banco de dados são feitas em tabelas. Tabelas possuem linhas (representam um exemplo, instância, daquilo que se deseja representar) e colunas ( que descrevem algum aspecto da entidade representada).

// Constraint ou restrições, servem para limitar os tipos de dados a serem inseridas. Elas são aplicadas às colunas As mais utilizadas no sql são: not null, unique, primary key, foreign key, default.

// Quando falamos de entidade, estamos falando de uma tabela que representa algum conceiro do mundo real que você quer escrever (pessoa, evento, acontecimento) e suas propriedades (altura, horário do evento, nome do acontecimento).

// Em um banaco de dados é comum termos diferentes tabelas, cada uma armazenando diferentes dados, mas que em conjunto possui significado maior.

// Para não duplicar dados em tabelas diferentes, pode-se estabelecer relacionamentos entre as tabelas.
// um pra um: Uma linha da Tabela A só deve possuir uma linha correspondente na tabela B ou vice-versa.
// um pra muitos e muitos para um : uma linha na tabela A pode ter várias linhas correspondentes na tabela B, mas uma linha da tabela B só pode possuir uma linha correspondente na tabela A.
// Muitos para Muitos: O tipo de relacionamento muitos para muitos acontece quando uma linha na tabela A pode possuir muitas linhas correspondentes na tabela B e vice-versa.