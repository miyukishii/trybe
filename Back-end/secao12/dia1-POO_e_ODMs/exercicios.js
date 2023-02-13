// Exercício 1) O que são os ODMs?
// R: É uma técnica para realizar o mapeamento de schemas em bases de dados orientadas a Documentos, fornece ainda funções para realizar operações CRUD.
// Com ele não é necessário escrever queries.
// A sigla significa Object Document Mapping, o mapeamento consiste na interligação de um Documento, que se encontra no abnco de dados, a um Objeto(classe) do código da aplicação.

// Exercício 2) Qual a diferença entre ODM e ORM?
// R: A diferença é o tipo de banco de dados para qual cada um é utilizado. Para bancos relacionais (MySQL, PostgreSQL) utiliza-se o ORM (como o Sequelize), para o banco não-relacionais (mongoDB, Cassandra) usamos a ODM (como Mongoose).
// A ORM tem como propósito garantir que as entidades e seus relacionamentos estejam mapeados de forma correta no armazenamento e manipulação dos dados.
// A ODM visa garantir que as restrições construídas no Schema estejam sendo aplicadas em uma coleção de documentos.

// Exercício 3) De acordo com a documentação do Mongoose, uma Interface, um Schema e uma Model servem para representar o quê? Dê exemplos.
// Uma interface é um contrato usado para definir a estrutura do documento no MongoDB.
// O Schema correspoinde às regras/validação que a minha interface terá.
// Model vai juntos os dois, a representação e as regras. É responsável por prover a interface de comunicação com o banco de dados.É nela que existe o método de pesquisa (find), de criação (create), e update(alteração.)