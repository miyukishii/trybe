var readlineSync = require('readline-sync');

const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert(value: number, from: string, to: string): number {
  const fromIndex = units.indexOf(from);
  const toIndex = units.indexOf(to);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
};

function exec() {

    const value = readlineSync.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnitChoiceIndex = readlineSync.keyInSelect(units, "Escolha um número para a unidade base:");
    const toUnitChoiceIndex = readlineSync.keyInSelect(units, "Escolha um número para a conversão:");

    const fromUnitChoice = units[fromUnitChoiceIndex];
    const toUnitChoice = units[toUnitChoiceIndex];

    const result = convert(value, fromUnitChoice, toUnitChoice)

    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
    console.log(message);
}


exec();