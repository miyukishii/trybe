// A imagem Docker é um arquivo imutável e a partir dele um ou mais containers podem ser gerados.
// Essa imagem pode ser criada a partir do comando docker build, seguindo as instruções contidas em um arquivo chamado Dockefile.
// O Dockfile é um arquivo que contém as instruções necessárias para construirmos a imagem. Nos mostra as bibliotecas que devem ser instaladas, arquivos a serem inicializados e etc.

// Imagens Docker são arquivos que funcionam como fotos de programas, bibliotecas, frameworks ou mesmo sistemas operacionais a partir dos quais criamos containers e podemos executar nossos códigos.

// Para vermos as imagens salvas
// docker images 

// Para obter a imagem diretamete do Registry e seixar no computador.
// docker pull <NOME_IMAGEM>

// Toda imagem possui um identificador -> IMAGE ID.
// Todo container também possui um identificador -> CONTAINER ID.

// Comando para obter os nomes e identificadores dos containers:
// docker ps -a

// Comanado para remover um container pelo id ( a flas -f é de force, caso o container esteja ativo):
// docker rm -f <id-do-container>

// Comando para removar imagem:
// docker rmi

// Comando para removar imagem pelo id:
// docker rmi <IMAGEM-ID>

// Limpando tudo antes de começar, remover os container e imagens DOcker que esteja no computador:
// docker system prune -af

// Criar uma imagem a partir de uma imagem Docker já existente:
// FROM <NOME-IMAGEM>

// Mostrar qual comando deve ser utilizado ao iniciar a imagem como container, no caso o CMD aceita uma lista de parâmetros
// CMD ["echo", "Eu sou uma pessoa estudante da Trybe"]

// Construir de fato nossa primeira imagem Docker, a flag -t indica qual será o nome da imagem. O contexto, qual o caminho da pasta o docker deve se basear para processar o arquivo DOckfile, normalmente o ponto final indica a pasta atual:
// docker build <flags> -t <nome-imagem> <contexto>
// ex: docker build -t primeira-imagem .