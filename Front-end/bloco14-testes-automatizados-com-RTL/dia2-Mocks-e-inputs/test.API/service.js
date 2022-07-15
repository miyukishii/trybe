// 1 - Crie uma função que gere um número aleatório:

const randomNumberRender = () => {
    return Math.florr(Math.random() * 100);
}

const UpperCaseString = (string) => {
    return string.toUpperCase();
};

const returnFirstLetter = (string) => {
    return string[0];
};

const concatStrings = (first, second) => {
 return first.concat(second);
};

const fetchDog = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random';
  return await fetch(url)
  .then((response) => response.json())
  .then((data) => data.message);
};

module.exports = { randomNumberRender, UpperCaseString, returnFirstLetter, concatStrings, fetchDog };