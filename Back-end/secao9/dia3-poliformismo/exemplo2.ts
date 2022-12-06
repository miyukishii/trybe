// Uso do super
// Ontem você viu como utilizar o super para chamar o construtor da superclasse dentro da subclasse.
// Uma outra coisa que você pode fazer é, ao sobrescrever um método qualquer, chamar a implementação dele na superclasse por meio do super.

class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo`); }
}

class Bird extends Animal {
    move() {
      super.move();
      console.log(`${this.name} está voando.`);
    }
  }

class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);