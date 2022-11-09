// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class studentBySubject {
  _enrollment: string;
  _name: string;
  _testsScores: number[];
  _workScores: number[];

  constructor(
    enrollment: string,
    name: string,
    testsScores: number[],
    workScores: number[],
  ) {
    this._enrollment = enrollment;
    this._name = name;
    this._testsScores = testsScores;
    this._workScores = workScores;
  }

  //Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.
  sumGrades(): number {
    return [...this._testsScores, ...this._workScores].reduce((prev, acc) => {
        const total = acc + prev;
        return total;
    }, 0);
  }

  gradesAverage(): number {
    const sumGrades = this.sumGrades();
    const divider = this._testsScores.length + this._workScores.length;

    return Math.round(sumGrades / divider);
  }
}

// const personOne = new studentBySubject('202001011', 'Maria da Silva', [25, 20, 23, 23], [45, 45]);
// console.log(personOne);
// console.log('Soma de todas as notas: ', personOne.sumGrades());
// console.log('Média de todas as notas: ', personOne.gradesAverage());