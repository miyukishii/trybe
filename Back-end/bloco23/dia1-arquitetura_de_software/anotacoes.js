// Arquiterua de software

// É um dos tópicos importantes quando falamos em desenvolvimento de software, pois ganhamos qualidade e facilidade de manutenção, pois o código é organizado agrupando as partes que possuem responsabilidades similares em um mesmo lugar.
// É a forma que organiza o software.
// Não existe a melhor arquitetura, sendo variado conforme o projeto, a fase o projeto.
// Iremos aprofundar nosso estudo no modelo arquitetural baseado em camadas (arquitetura MSC). Que possui arquitetura dividida em 3 partes:
// - camada Model: tem a responsabilidade de acomodar todo código de acessar dados sejam eles em um banco de dados ou no sistema de arquivos. Dessa forma, as demais camadas não necessitam saber de qual banco de dados, por exemplo, os dados estão sendo armazenados ou recuperados.
// - camada Service: tem como responsabilidade validar as regras de negócio de uma aplicação.
// - camada Controller:  tem como responsabilidade validar os valores recebidos de uma aplicação cliente. Podem ser por exemplo, um JSON dentro do corpo da requisição HTTP, parâmetros de requisição...

// Camada Model:
// Quando falamos de acomodar código de acordo com a sua responsabilidade, estamos falando em criar pastas com nomes específicos que com contêm código fonte com funções similare.
// Responsável pelo acesso e pela modelagem dos dados.
//
