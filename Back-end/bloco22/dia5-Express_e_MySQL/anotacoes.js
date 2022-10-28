// Aprenderei a integrar o banco de dados MySQL a uma aplicação Express. Permitindo a criação de uma API com o Express, capaz de cadastrarm consultarm atualizar e excluir dados do MySQL.


// Seguem abaixo os comandos utilizados para criar a pasta trybecash-api (você pode criá-la na sua pasta de usuário), inicializar o projeto Node.js com o uso do npm init -y e criar o subdiretório src (o nome src é a abreviação da palavra source) e o subdiretório tests.
// mkdir trybecash-api
// cd trybecash-api
// npm init -y
// npm i -D nodemon@2.0.19
// mkdir src
// mkdir tests

// Uma pool de conexões é um repositório que contêm um conjunto de conexões estabelecidas previamente com o banco de dados.
// o uso de um pool aceleram o processo de execução de consultas no MySQL, pois reutiliza as conexões em operações futuras, não precisando criar uma nova conexão a cada operação.
// A função createPool recebe um objeto com os seguintes parãmetros:
// - host: o endereço IP do MySQL. COmo temos um container DOcker sendo excutado em nossa máquina lócal, o valor será localhost ou 127.0.01 (equivalentes);
// - user: O nome de usuário que nossa aplicação utilizará para acessar o MySQL. No caso, root.
// - port: número da porta que nossa aplicação utilizará para acessar o MySQL. No caso 33060.
// - password: senha definida na variável de ambiente MYSQL_ROOT_PASSWORD no docker-compose.yaml.
// - database: nome do banco de dados MySQL definida na variávle de ambiente MYSQL_ROOT_PASSWORD no docker-compse.yaml
// - waitForConnections: Determina qual será a ação da poll de conexões quando nenhuma conexão estiver disponível na pool e quando o limite de criação de novas coneções tiver sido alcançado. Se o valor for true, será criado uma fila de espera por conexões, caso contrário receberá uma callback com um erro.
// - connectionLimit: Número máximo de requisições de coneão que a poll criará de uma vez. Padrão = 10.
// - queueLimit: O número máximo de requisições de conexões que a poll irá enfileirar antes retornar um erro. Se o valor deste parâmetro for igual a 0 significa que não existe um limite. padrão = 0.

