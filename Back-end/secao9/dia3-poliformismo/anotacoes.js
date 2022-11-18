// Introdução:
// O pilar poliformismo permite que coisas diferentes acontença, ao chamarmos objetos de classes filhas distintas de uma mesma superclasse.
// É um método implementado em uma superclasse que é reimplementado numa subclasse, comportando-se de forma diferente.

// Classe abstrata e método abstrato
// A ideia é que a superclasse, mais genérica, não deve dazer ideia de como esse método deve funcionar, apenas saber que ele existe.
// Para isso, utilizamos classes abstratas, e estas possuem métodos abstratos.
// As classes abstratas não podem ser instanciadas, ou seja, você não pode criar um objeto a partir de uma classe abstrata.
// Métodos abstratos só podem existir em classes abstratas, e eles devem ser implementados na subclasse.
// Ver exemplo3.ts

// Métodos (e atributos) estáticos
// Um método estático nada mais é do que uma função que não precisa acessar nenhum atributo do objeto.
// ver exemplo4.ts

// Sintaxe com interfaces e generics
// O polimorfismo com interface se sá da mesma forma que com herança.
// Duas classes diferentes implementam a mesma interface, implementando também os métodos obrigatórios que a interface estipula.

// Garantia de tipo com Generics
// Ao passar simplesmente Pessoa como tipo da pessoa corretora, você perde a capacidade de acessar elementos específicos das classes PessoaFísica e PessoaJurídica.
// class Contract {
//     static _number = 0;
//     constructor(public broker: Person){}
//     static get number() { return this._number; }
//   }
  
//   const c1 = new Contract(pp0);
//   console.log(c1.broker.cpf); // Erro, pois não existe cpf em Person
// ver exemplo7.ts