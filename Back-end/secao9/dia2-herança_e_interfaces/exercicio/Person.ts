//  Exercício 1: Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.
// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  set birthDate(value: Date) {
    this.validatebirthDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    return Math.floor(diff / (1000 * 3600 * 24) / 365.25);
  }

  private validateName(value: string): void {
    if(value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }

  private validatebirthDate(value: Date): void {
    if(value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if(Person.getAge(value) > 120) throw new Error('A pessoa não pode possuir mais de 120 anos.');
  }

}