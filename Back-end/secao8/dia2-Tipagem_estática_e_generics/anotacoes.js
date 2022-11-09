// Tipos de coleção
//
// - Arrays: São conjuntos de valores de mesmo tipo. Para declará-los, você pode adicionar o tipo esperado do array com a sintaxe.
// let arrayName: type[] = [...];
// ex.: let names: string[] = ["Mary Joe", "Alan Joe"];
//
// - Tuplas: permitem declarar um conjunto de valores cuja ordem e tipo dos valores são fixas. Em JS, elas são representadas como arrays, mas são estruturas diferentes.
// sintaxe -> let variableName: [type, type, ...] = [..., ..., ...];
// let fullName: [string, string] = ["Jane", "Doe"];
// let person: [string, number] = ["Jane Doe", 35];
// let car: [string, string, number] = ["Ford", "F400", 10];

// Type Aliases
// São utilizados para declarar a forma de um objeto, nomeando o tipo. O que nos permite utilizar o mesmo tipo várias vezes.
// O type alias é um nome para qualquer tipo.
//
//      sintaxe -> 
//      type Point = {
//        x: number;
//        y: number;
//      };

//      function printCoord(pt: Point) {
//        console.log("O valor da cordenada x é: " + pt.x);
//        console.log("O valor da coordenada y é: " + pt.y);
//      }
//    
//      printCoord({ x: 100, y: 100 });
//
//      saída:
//      O valor da cordenada x é: 100
//      O valor da cordenada y é: 100

// Exercícios

// 1.a) Crie um type para um objeto que represente um pássaro.
//      type Bird = {
//        wings: 2;
//        beaks: 1;
//        biped: true;
//      }
//
// 1.b) Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
//       type Sum = (x: number, y: number) => number;
//
// 1.c) Crie um type para um objeto que represente um endereço.
//        type Bird = {
//          street: string;
//          number: number;
//          city: string;
//          state: string;
//        }


// Type Unions
// É uma forma de declarar que um objeto é um tipo formado a partir de dois ou mais outros tipos.
// function imprimirCPF(cpf: number | string){
//   console.log("Seu CPF é: " + cpf);
// }
//
// Exercícios
//
// 2.a) Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
//      type State = "liquid" | "solid" | "gaseous";
//
// 2.b) Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
//      type Document = number | string;
//
// 2.c) Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
//       type Sistem = "linux" | "mac os" | "windows";
//
// 2.d) Crie um type union que represente as vogais do alfabeto.
//       type Vowels = "a" | "e" | "i" | "o" | "u";
//

// CLasses
// São uma maneira de definir a forma de um objeto.
// 
// interface Hero {
//     _nome: string;
//     _poder:string;
//     falarFraseInspiradora(f: string): string;
// }
// 
// class Hero {
// 
//     constructor(nome: string, poder: string) {
//       this._nome = nome;
//       this._poder = poder;
//     }
  
//     falarFraseInpiradora(frase: string) {
//       return `${this._nome} diz: ${frase}`;
//     }
//   }
// 
//   const Hero1 = new Hero('Martin Luther King', 'Dar exemplo');
//   console.log(Hero1.falarFraseInpiradora('Não é necessário que você veja a escada.'));
//
// Exercícios
//
// 3.a) Crie uma classe cujo objeto represente um Cachorro.

//   interface Dog {
//     _nome: String;
//     _color: String;
//     Latir(barkedTimes: Number) : String;
//   }

//   class Dog {
//     constructor(nome: String, color: String) {
//         this._nome = nome;
//         this._color = color;
//     }

//     latir(vezes: Number) {
//         return `${this._nome} latiu ${vezes} vezes`;
//     }
//   }

//   const Dog1 = new Dog('Haru', 'branco');
//   console.log(Dog1.latir(4));
//