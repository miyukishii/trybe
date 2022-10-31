// TypeScript

// Vamos aprender a linguagem de programação TypeScript, e sua relação com o Javascript.
// Criada em 2012 pela Microsoft.
// Pose ser utilizada tanto em back-end quanto em front-end.

// O que é?
// É uma linguagem de código aberto, é um subconjunto (superset) do JavaScript, ou seja, podemos cociliar os conhecimentos adquiridos sobre Js para desenvolver Ty.
// TYpescript é um subconjunto do ECMAScript 2015 ou ECMAScript6. Logo, todo o JS também é código TypeScript.
// Um programa TypeScript pode consumir o JS de forma direta.

// JS é a linguagem oficial da Web, criada para aplicações multiplataforma que rodam tanto no navegador quanto em servidores.
// No entanto ela tem uma limitação: não foi criada para aplicações envolvendo milhares de linhas de códigos.
// A TypeScript foi desenvolvida justamente para resolver as limitações do JS, sem prejudicar sua capacidade de executar código em todas as plataformas.

// Tipaggem
// O grande recurso do typescript é o sistema de tipos. 
// Podemos identificar o tipo de dado em variáveis, parâmetros ou retorno de funções utilizando a tipagem.
// Tipagem, também conhecida como dicas de tipos, é a forma que utilizamos para descrever de qual tipo será o valor de um componente do nosso código.
// Proporcionando uma melhor documentação do código e permite validação pelo TypeScript para saber se está funcionando de forma correta.

// Categorização da tipagem:
// - Tipagem Estática -> Não permite que a pessoa desenvolvedora altere o tipo após ele ser declarado e, geralmente, a verificação de tipo é feita em tempo de compilação.
// - TIpagem dinâmica -> Está ligada à habildade da linguagem de programação em 'escolher o tipo de dado' de acordo com o valor atribuído a variável, em tempo de execução.
// - Tipagem Forte -> linguagens fortemente tipadas não realizam conversões automaticamente. Necessário que a pessoa desenvolvedora faça a conversão para diferentes tipos, cado seja possível.
// - Tipagem Fraca -> Operação entre valores de tipos diferentes podem ocorrer sem necessidade de conversão. POrém error podem ocorrer durante a execução.

// Inferência de tipo:
// Algumas linguagens com tipagem estática podem fazer a inferência de tipo na declaração de variáveis, mas sem permitir que o tipo seja alterado após a declarção.
// O TypeScript é uma dessas linguagens.

// Compilador VS Transpilador:
// - Compilador -> É um programa que traduz o código desenvolvido usando uma linuagem de mais alto nível ( mais próxima dos seres humanos) em um código de um programa equivalente de uma linguagem de mais baixo nível (mais róxima do processador).
// - Transpilador é um programa de sistema que traduz o código desenvolvido utilizando uma linguagem de mais alto nível em um código de uma programa equivalente de uma outra linguagem de mais alto nível ou em uma versão diferente da mesma linguagem.
// O Transpilador é considerado por alguns, como um tipo de Compilador que atua em um nível mais alto de abstração. Como o TypeScript senda uma linguagem transpilada por traduzir em código JavaScript.
// No entanto, o TypeScript possui um Compilador denominado TSC( TypeScript Compiler), responsável por realizar essa tradução.

// TSC
// É o responsável por realizar a tradução do noss código TypeScript para código JavaScript.
// Reliza verificações de tipos no nosso código TypeScript.
// Para instalar o TSC e o suporte ao TypeScript em nossa máquina via npm/.
// npm install -g typescript //  instala globalmente.
// tsc nomeDoArquivo.ts // Para executá-lo
// ou
// npx tsc nomeDoArquivo.ts // caso não deseje instalar, apenas executar.
// node nomeDoArquivo.js //  rodar o arquivo gerado js. utilizando Node.

// TSConfig
// O que define que um projeto é TypeScript é a presença de um arquivo de ocnfiguração TSConfig (tsconfig.json), que possui as variáveis de configuração que definirão como o nosso código será compilado.
// OBSERVAÇÃO: a melhor prática para utilização do typeScript em um projeto é intalá-lo como uma devDependency.
// npm i -D typescript
// tsc --init // gerante automaticamente o tsconfig.json já com as principais configurações.
// ou
// npx tsc --init //  caso queira utilizar o tsc como executável npx.
// npm i -D @tsconfig/node16 // Caso queira utilizar o node no projeto.

// Tipos e Subtipos
// Em TS, todos os tipos são subtipos de um tipo principal chamado any (qualquer valor em JavaScript). Os demais tpos são tipos primitivos, tipos de objeto ou parâmetros de tipo.
// - Tipos primitivos -> boolean, number, string, void, null, undefined.
//    * boolean *
//    Ex.: let yes: boolean = true; // cria uma variável de nome "yes" e diz que o tipo é booleano e o valor é true.
//         let no: boolean = false; // cria uma variável de nome "no" e diz que o tipo é booleano e o valor é false.
//
//    * number *
//     cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor, isso não funciona com const.
//     let x: number;
//     let y: number = 0;
//     let z: number = 123.456;
//
//    * string *
//     recebe uma sequência de caracteres armazenados como unidades de código UTF-16 Unicode.
//     let s: string;
//     let empty: string = "";
//     let abc: string = 'abc';
//
//    * void *
//     existe apenas para indicar a ausência de um valor, como em uma função sem valor retornado.
//     function sayHelloWorld(): void {
//       console.log("Hello World!");
//     }
//
//     * null e undefined *
//     são subtipos de todos os outros tipos.
//     let nullValue = null;
//     let undefinedValue = undefined;
//
// Como visto, podemos utilizar a inferência de tipo no TS, declarar sem especificarmos o tipo e o compilador fará a inferência do tipo por meio do valor definido para a variável.

// Enum ou enumeração
// É o primeiro tipo de dado que não existe no Javascript.
// Enum é um nome simbólico para um conjunto de valores relacionados, um conjunto de constantes para uso com variáveis e propriedades.
// São úteis quando temos um conjunto de valores que determinado tipo de variável pode assumir.
//
//     Ex: enum StudentStatus {
//           Active,
//           Inactive,
//           Paused
//         }
//
//        let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
//        console.log(newStudentStatus); //saída: 1
// Por padrão, uma enum é baseada em números. Os valores começam de zero e para cada opção é assinalado um número incrementado por 1, assim como os índices de um array. Portanto, Active é 0, Inactive é 1 e Paused é 2. Para termos a nossa enum refletindo os valores que temos no banco de dados externo, precisamos declarar isso da seguinte forma:

// Exercício:
// 1) Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
//    enum WeekDays {
//      Sunday = 1,
//      Monday,
//      Tuesday,
//      Wednesday,
//      Thursday,
//      Friday,
//      Saturday,
//    }
//
// 2) Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
//
//   enum RainbowColors {
//     Red = "Vermelho",
//     Orange = "Laranja",
//     Yellow = "Amarelo",
//     Green = "Verde",
//     Blue = "Azul",
//     Indigo = "Anil",
//     Violet = "Violeta",
//   }