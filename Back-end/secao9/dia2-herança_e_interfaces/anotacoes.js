// Intrdoução
// Uma das melhores qualidades da Orientação a Objetos é a capacidade de reutilizar códigos, sem precisar reescrevê-los.
// Herança e composição facilitam bastante a reutilização em diversas ocasiões.

// O pilar herança permite que classes herdeiras de outras sejam criadas, de forma a herdar também seus métodos e atributos.
// Herança é uma característica da Classe e não do Objeto.
// A classe base é denominada classe mãe ou superclasse, e a classe que estende dela é denominada classe filha ou subclasse.

// SINTAXE GERAL
//
// Vamos começar criando uma classe Animal e uma classe Mamífero, que herda de animal,

// class Animal {
//   constructor(public name: String, private birthDate: Date) { }

//   get age() {
//     const timeDiff = Math.abs(
//       Date.now() - new Date(this.birthDate).getTime()
//     );
//     return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
//   }
// }

// class Mammal extends Animal {
//     walk() {
//       console.log(`${this.name} está andando!`);
//     }
//   }

//   const tiger = new Mammal(
//     'Tigre',
//     new Date(Date.parse('May 03, 2020')),
//   );

//   const main = (animal: Animal) => {
//     console.log(animal.age);
//   }

//   main(tiger);
//   tiger.walk();



// Para fixar:
//
// Crie uma classe chamada Superclass.
// A Superclass deve possuir um atributo público isSuper
// isSuper deve ser setado como true na inicialização.
// A Superclass deve possuir um método público chamado sayHello, que deve imprimir “Olá mundo!”.
// Crie uma classe chamada Subclass que herda da Superclass.
// Crie uma função myFunc fora do escopo da Subclass que recebe um objeto da Superclass.
// Dentro dessa função, chame o método sayHello do objeto passado como parâmetro.
// Crie um objeto da Superclass e outro da Subclass.
// Chame a função myFunc 2 vezes, passando os objetos criados.

// class Superclass {
//   isSuper: boolean;

//   constructor() {
//     this.isSuper = true;
//   }

//   public sayHello(): void {
//     console.log('Olá mundo!');
//   }
// }

// class SubClass extends Superclass { }

// const myFunc = (object: Superclass) => {
//   object.sayHello();
// }

// const sup = new Superclass();
// const sub = new SubClass();

// myFunc(super);
// myFunc(sub);



// Atributos protegidos
//
// class Animal {
//     constructor(private birthDate: Date) { } // Repare no private
//
//   }
//   class Bird extends Animal {
//     showBirthDate() {
//       console.log(this.birthDate); // ERRO! birthDate é privado e não é visível pra subclasse Bird.
//     }
//   }
//
// No atributo private birthDate, não pode acessar out alterar este atributo fora da classe Animal.
// Entretando, às vezes preisamos manter alguns atributos e métodos privados do mundo externo, mas possíveis de serem modificados dentro de subclasses.
// É aí que entra o protected.
//
// class Animal {
//     constructor(protected birthDate: Date) { } // Protected: classe filha pode ler e escrever, mas acessos externos não
//   }
//
//   class Bird extends Animal {
//     showBirthDate() {
//       console.log(this.birthDate); // Okay!
//     }
//   }


// Para fixar:
//
// Comente a criação da instância da Superclass.
// Comente a chamada da função que recebe o objeto do tipo Superclass como argumento.
// Faça a função receber não mais um objeto da Superclass, mas sim da Subclass.
// Crie, na Subclass, um método público chamado sayHello2.
// Chame o método sayHello dentro do método sayHello2.
// Mude a visibilidade do método sayHello de public para protected.
// Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método sayHello2.
// Mude a visibilidade do método sayHello de protected para private. O que acontece?
//
// class Superclass {
//   isSuper: boolean;

//   constructor() {
//     this.isSuper = true;
//   }

//   protected sayHello(): void {
//     console.log('Olá mundo!');
//   }
// }

// class SubClass extends Superclass {
//     public sayHello2(): void {
//       this.sayHello();
//     }
//  }

// const myFunc = (object: SubClass) => {
//   object.sayHello2();
// }

// const sub = new SubClass();

// myFunc(sub);


// Implementando Interfaces:
// A herança é utilizada quando queremos codificar um comportamento padrão na superclasse, a fim de que as subclasses sigam esse comportamento, e também quando queremos mais reutilização de código.
// Quando usamos Interfaces, temos uma class que vai implementar métodos definidos em uma interface, o objetivo é desaclopar a implementação do contrato.
// Na Interface, nós determiandos quais as assinaturas dos métodos e quais atributos o contrato deve respeitar. A interface por si so não pode ser instanciada, ou seja, não podemos usar ela junto com o new para criar um objeto novo.
// Na Interface não podemos implementar nenhum código, apenas denifir o contrato (atributos e assinatura dos métodos).
// A classe que implementar essa interface, deve obirgatriamente, implementar todos os métodos e ter todos os atributos que a interface declara.
//
// interface Animal {
//     name: string;
//     age: number;
  
//     getBirthDate(): Date;
//   }
  
//   class Bird implements Animal {
//     constructor(
//       public name: string,
//       private birthDate: Date) {}
  
//     get age() {
//       var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
//       return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
//     }
  
//     getBirthDate() { return this.birthDate; }
  
//     fly() { console.log(`${this.name} está voando!`); }
//   }
  
//   const parrot = new Bird(
//     'Papagaio',
//     new Date(Date.parse('Aug 16, 2015')),
//   );
  
//   console.log(parrot.age);
//   parrot.fly();
  
  /*
  Saída (código executado em Mar/2022):
  6
  Papagaio está voando!
  */

// Observe que a interface é implementada por uma classe por meio da sintaxe class Classe implements Interface.

// Para Fixar:
//
// Crie uma interface chamada MyInterface.
// MyInterface deve possuir um atributo myNumber do tipo number.
// MyInterface deve possuir um método myFunc, que recebe um parâmetro myParam do tipo number e retorna uma string.
// Crie uma classe MyClass que implementa MyInterface.
// Faça o atributo myNumber ser inicializado diretamente nos parâmetros do construtor da MyClass.
// Faça o método myFunc somar o myNumber com o myParam e retornar uma string qualquer que contenha a soma.
// Crie um objeto da classe MyClass e o utilize acessando myNumber e chamando myFunc.

// interface MyInterface {
//   myNumber: Number;
//   myFunc(myParam: number): string;
// }

// class MyClass implements MyInterface {
//   constructor(public myNumber: number) { }

//   myFunc(myParam: number): string {
//     return ` sum: ${this.myNumber + myParam}`;
//   }
// }

// const objeto = new MyClass(2);
// console.log(objeto.myFunc(4));

// Interfaces versus Classes
// Interfaces e superclasses podem servir para especificar o comportamento de classes, mas de formas e em níveis distintos.
// Quando utilizamos interfaces, queremos garantir que alguns atributos e métodos existam, sem se importar com o que fazem.

// Composição e segregação
// A composição de objetos/classes é uma forma de combinar objetos ou tipos de dados para construir sua estrutura.
// A composição permite que você realize alterações na classe principal sem afetar as demais envolvidas ou correr o risco de comprometer algum comportamento.
