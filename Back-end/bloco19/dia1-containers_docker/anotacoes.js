// Temos que lidar com diferentes ambientes durantes o ciclo de desenvolvimento:
// Ambiente local, o computador.
// Ambiente de staging, que utilizamos para testar e validar funcionalidades;
// Ambiente de produção acessado pelos usuários do produto.

// Por isso, precisamos configurar todos os ambientes, para que funcionem em conjunto. 
// Para resolver problemas de compatibilidade, foi criado o Docker.

// Docker -> https://docs.docker.com/engine/reference/commandline/docker/

// Com ele conseguimos também simular e testar facilmente um ambiente completo, podendo replicar as configurações para outra máquina com facilidade, além de conseguir trabalhar com nossas aplicações em escala de forma simples.
// O Docker funciona como uma espécie de empacotador (conteinerização) de todas essas dependências e requisitos para que a sua aplicação funcione em qualquer ambiente.
// O primeiro passo para utilizar o Docker é realizar a sua instalação. Isso nos dará acesso à sua interface de linha de comando (CLI).
// Curiosidade: o Docker é feito de três grandes programas: Docker Daemon, a API e o CLI. Neste conteúdo, vamos instalar os três de uma vez só, entretanto vamos interagir com o Docker apenas por meio da sua interface de linha de comando.
// O Daemon é um serviço que fica no background, ou seja, é um serviço que sempre está em execução e aguarda por comandos feitos por meio do CLI.

// Imagem é a nossa aplicação 'empacotada' com todas as dependências necessárias já instaladas dentro dela.
// o Container é um processo de representa a execução de uma image já construída anteriormente.

// Registry é um local remoto onde podemos enviar e baixar imagens Docker. Podemos utilizá-lo como um catálogo de imagens Docker, podendo criar novas imagens usando outra como base.

// A interação com o Docker ocorre através dos comandos feitos pelo CLI, que são enviados para a API interna do Docker, que enviar os comandos para o Daemon.

// docker <comando> <subcomando> <parâmetros> é o formato padrão para comandos não-abreviados no CLI;
// Utilize o parâmetro --help no <comando> ou <subcomando> para ter a relação completa do que pode ser executado a partir deles;
// Exemplo: docker container --help ou docker container run --help.
// Os <parâmetros> são opcionais na execução dos comandos;


// COMANDOS

// Utilize o comando docker images para visualizar todas as imagens Docker que já estão presentes em sua máquina.
// Utilize o comando docker ps ou o comando mais novo, o docker container ls, para listar todos os containers em execução neste momento em sua máquina.
// Entretanto, por padrão, o comando docker ps não exibe containers que foram parados ou que terminaram sua execução. Para visualizar todos os containers atuais, incluindo os que estão em execução e também parados, é necessário utilizar a flag -a.

//  Utilize o comando docker container run <flags>? <imagem>:<tag> <argumentos>? para executar um container utilizando a imagem identificada pelo <imagem>:<tag>.
// Você pode remover os containers exemplificados acima usando o comando docker rm <nome-do-container>, se ele estiver parado ou tiver sua execução terminada.
// A flag --rm indica para o Docker que desejamos que um container seja removido ao final da sua execução. ex: docker container run --rm alpine:3.14 echo "Hello World 3".
// Vamos utilizar o comando docker exec -it <nome-do-container> <comando-a-ser-executado>, testando o acesso ao terminal.