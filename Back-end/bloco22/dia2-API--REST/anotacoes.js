// APIs Web é a ferramenta definitiva para conectar o front-end de uma aplicação aos dados que ela precisa salvar e receber. O padrão REST, rotas e aplicações C.R.U.D são partes do conhecimento de como se fazer uma boa API - conhecimento que te fará brilhar em inúmeros processos seletivos!

// Servidor Web são programas de computador que entregam algum tipo de informação ou página a quem os solicita através da internet.

// O comando npm init -y cria um arquivo package.json, onde será configurado as dependências que usará ao longo da construção da API.

// Framework Express = Nos ajuda a organizar e a construir APIs robustas e flexíveis, nos dando ferramentas que fazem as coisas acontecerem com poucas linhas de código.
// O que é framework? Um framework ele te sugere uma forma específica de construir sua aplicação e te dá ferramentas pra fazer isso mais rápido.

// Para instalar a framworkd Express na aplicação, utiliza-se:
// npm i express@4.17
// Após executar o comando acima, um arquivo e um diretório irão ser criados automaticamente - o package-lock.json e o node_modules!

// O arquivo package-lock-json serve para gerenciar as dependências de nossas dependências;
// O diretório node_modules é onde todas as nossas dependências, e dependências de nossas dependências, serão instaladas.

// É fundamental garantir a qualidade de escrita do nosso código. Por isso devemos instalar o ESlint. Para instalar com as regras que se utiliza na trybe, utiliza-se o comando:
// npm i eslint@6.8 eslint-config-trybe-backend@1.0 -D

//  crie os arquivos referentes a configuração do ESLint na raiz:
// touch .eslintignore .eslintrc.json
// .eslintignore: Usado para você dizer ao ESLint que ignore arquivos e diretórios específicos;
// .eslintrc.json: Usado para você sobrescrever regras do ESLint;

//Finalize inicializando um repositório git na pasta da aplicação, criando e configurando o arquivo .gitignore:
// git init && touch .gitignore
// node_modules

//Com base nisso, surge o pacote do nodemon. Usando o servidor com nodemon, toda vez que você salvar algum arquivo, ele reinicia sua aplicação automagicamente! 

// O conjunto de operações CRUD
// C - create 
// R - read
// U - update
// D - delete

// No contexto de Back-end, rotas representam as portas de entrada para a sua API.
//As ações do C.R.U.D.: Criar, ler, atualizar e remover. Pois é, nossa API terá quatro rotas. De olho na dica👀: Rotas podem ser chamadas de caminhos, paths e endpoints de uma API.

// O que é HTTP ? Protocolo de transferência de hipertexto (qualquer mídia).
// API - É uma espécie de sotware que retorna respostas.