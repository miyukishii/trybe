abstract class Animal {
  constructor(public name: string) { }
  abstract move(): void
}

class Bird extends Animal {
  move() { console.log(`${this.name} está voando.`); }
}

// const a = new Animal('Tubarão');
const b = new Bird('Papagaio');

const myMove = (animal: Animal) => {
  animal.move();
}

// myMove(a);
myMove(b);