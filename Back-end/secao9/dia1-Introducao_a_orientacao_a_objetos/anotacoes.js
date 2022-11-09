// Introdução
// Aprender Programação Orientada a Objetos (POO)
// É um dos paradigmas de programação mais populares.
// Muito mais do que uma forma de organizar códigos, a POO é uma forma de pensar que fundamenta algumas das arquiteturas de aplicação.
// Praticamente um requisito para entrar no mercado de trabalho.

// Classe
// É utilizado para determinar algo genérico. Tem como finalidade modelar com precisão a representação de uma entidade do mundo real.
// Ex.: classe é o conceito Pessoa. -> Existem várias pessoas no mundo, mesmo sendo diferentes uma das outras, pertecemos a mesma classe Pessoa.
// Cada pessoa é um objeto diferente de uma mesma classe.
// Objeto (ou instÂncia da classe) é algo específico.
// Uma classe é uma estrutura que abstrai um conjunto de objetos com características similares, e um objeto é uma instância (exemplar) de uma classe.
// Dentro da classe e objetos existem atributos e métodos.

// Atributos
// Atributos de uma Pessoa são: altura, massa da Pessoa.
// A definição dos atributos é feita na classe, mas os valores são do objeto.
// Todas as Pessoas possuem uma altura e uma massa, portanto, a definição fica na classe, mas os valores são de cada objeto.
// Um atributo é uma variável criada numa classe.

// Método
// É um comportamento de um objeto.
// ou mensagem retrata uma ação.
// Ex.: uma pessoa pode dormir ou acordar.
// Um método é uma função criada numa classe.
// O método construtor é rodado automaticamente na criação de um objeto, e serve para inicializar e validar alguns atributos e chamar alguns métodos.
// get é um método de acesso ao valor.
// set é um método para modificar valor.

// Pilares da POO
// POO possui quatro pilares fundamentais.
// - Abstração:  indica que você não necessariamente precisa saber os detalhes de como algo funciona. Como uma câmera, não se sabe todos os detalhes de seu funcionameto, mas a operação para se tirar uma foto, sim.
// - Encapsulamento: os atributos só podem ser acessados e/ou modificadoss dentro da classe (atributos são privados da classe). Mas os métodos na classe permitem que o atributo sejam alterados de forma direta. A ideia é garantir que os processos internos da classe possam ocorrer sem que a pessoa que a utiliza altere atributos de forma indevida.
// - Herança: permite que classes filhas, que herdam métodos e atributos de outra classe (super classe), sejam criadas. Ex.: na classe Pessoa, com os atributos nome altura e com o método sonhar. A partir da classe Pessoa, posso criar outra classe chamada PessoaCantora, que herda de Pessoa. Ou seja, automaticamente, PessoaCantora virá com os atributo nome e altura e com o método sonhar , mas poderá ter outro método exclusivo dela, como cantar.
// - Polimorfismo: permite que coisas diferentes aconteçam ao chamarmos objeto de classes filhas distintas de uma mesma super classe. Ex.: existe a classe Pessoa, que possui um método dormir, só que esse método não é implementado (não possui nenhum código). ENtão são criadas duas classes: PessoaQUeDormeDeBrucos e PessoasQueDormeDeLado, e ambas implementam o método dormir conforme seus nomes.

// SINTAXE GERAL
// A sintaxe de criação de classes, objetos, atributos e métodos e TypeScript:
//
// class Person {
//     name: string;
//     height: number;
//     weight: number;
//
//     constructor(n: string, h: number, w: number) {
//       console.log(`Creating person ${n}`);
//       this.name = n;
//       this.height = h;
//       this.weight = w;
//     }
//
//     sleep() {
//       console.log(`${this.name}: zzzzzzz`);
//     }
//   }
//
//   const p1 = new Person('Maria', 171, 58);
//   const p2 = new Person('João', 175, 66);
//   console.log(p1.name, p1.height, p1.weight);
//   console.log(p2.name, p2.height, p2.weight);
//   p1.sleep();
//   p2.sleep();
  
  /*
  Saída:
  Creating person Maria
  Creating person João
  Maria 171 58
  João 175 66
  Maria: zzzzzzz
  João: zzzzzzz
  */

// Para criar uma classe, basta utilizar a palavra reservada class, seguida do nome da classe e um par de chaves.
// Dentro das chaves podemos criar atributos: digitando o nome do atributo e seu tipo.
// Ainda dentro das chaves da classe podemos criar métodos: digitando o nome, os parênteses com os parâmetros e as chaves com o corpo. Não precisam do function.
// Com a classe Person, podemos criar dois ou mais objetos(duas pessoas diferentes: p1 e p2);
// O método construtor é chamado assim que utilizamos a sintaxe de criação de um objeto com a palavra reservada new.
// O construtor recebe os parâmetro n, h e w, que são abreviados apenas para deixar explícito que o nome dos parâmetros não é diretamente relacionado ao nome dos atributos que ele populam.
// A palavra reservada this serve para representar o objeto em si.

// Para fixar:
// 1) Crie uma classe chamada Tv, com os atributos:
//   brand: marca da TV;
//   size: tamanho em polegadas;
//   resolution: resolução da tela;
//   connections: conexões disponíveis(HDMI, Ethernet, etc.);
//   connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.

// class Tv {
//   brand: String;
//   size: Number;
//   resolution: Number;
//   connections: String[];
//   connectedTo: String;

//   constructor(b: string, s: number, r: number, c: String[], cTo: string) {
//           this.brand = b;
//           this.size = s;
//           this.resolution = r;
//           this.connections = c;
//         }
// }

// 2) Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
//
// class Tv {
//   brand: String;
//   size: Number;
//   resolution: string;
//   connections: String[];
//   connectedTo: String;

//   constructor(b: string, s: number, r: string, c: String[], cTo: string) {
//           this.brand = b;
//           this.size = s;
//           this.resolution = r;
//           this.connections = c;
//   }
//
//   turnOn(): void {
//     console.log(`TV ${this.brand}, ${this.size}`, rezolution: $(this.resolution));
//   }
// }

// 3) Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
//  const tv1 = new Tv('LG', 32, '4k', ['HDMI', 'Ethernet', 'Wifi']);
//  tv1.turnOn();


// Sintaxe do Encapsulamento
//
// class Person {
//     name: string;
//     private _weight: number;
//     private _age: number;
//     readonly height: number;
  
//     constructor(name: string, height: number, weight: number, age: number) {
//       this.name = name;
//       this._weight = weight;
//       this._age = age;
//       this.height = height;
//     }
  
//   // esta sintaxe permite acessar o valor retornado via person.getWeight()
//     getWeight() {
//       return this._weight;
//     }
  
//   // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
//     get age() {
//       return this._age;
//     }
  
//   // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
//   // mesmo que esteja ocorrendo uma validação internamente
//     set age(newValue: number) {
//       if (newValue >= 0 && newValue < 200) {
//         this._age = newValue;
//       }
//     }
  
//     birthday() {
//       this._age += 1;
//     }
  
//   }
  
//   const p1 = new Person('Maria', 171, 58, 19);
//   const p2 = new Person('João', 175, 66, 18);