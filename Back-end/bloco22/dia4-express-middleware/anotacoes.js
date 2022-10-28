// Middlewares

// O express é uma framework com o objetio de receber requisições e enviar respostas. 
// No Express toda função passada para uma rota é um middleware. É um função que realiza o tratamento de uma requisição HTTP e que pode responder essa request ou chamar o próximo middleware. Middleware é uma função nativa do express.

// Middleware recebe três parâmetros: req, res e next.
// Middleware não precisam retornar nada