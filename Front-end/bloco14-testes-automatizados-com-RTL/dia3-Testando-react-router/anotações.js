// Por que é importante aprender a testar rotas da nossa app?
// Pois podemos escrever testes imaginando como o usuário vai usar a página, permitindo testar o fluxo de uso do programa.

// a biblioteca history permite acessar a sessão de histórico do navegador e também a localização atual (URL)

// link da history -> https://v5.reactrouter.com/web/api/history

// mas os mais utilizados serão o método push, que permite mudar a rota dentro do ambiente de teste, e o location.pathname, que retorna a URL exata em que vicê está.

// também tem o método createMemoryHistory, que é feita para ambientes que não possuem o DOM.

// função renderWithRouter é uma função customizada para testes com rotas; É uma função helper ou assistente, que executa uma tarefa específica e não depende de outras funções.

