// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

// function append(joke) {
// const paragraph = document.getElementById('jokeContainer');
// paragraph.innerText = joke
// }

const fetchJoke = () => {
  const paragraph = document.getElementById('jokeContainer');
  const objectReturn = {
      method: 'GET',
      headers: {
          'Accept': 'application/json'
      }
  };
  fetch(API_URL, objectReturn)
  .then(responde => responde.json())
  .then(data => paragraph.innerText = data.joke);
};

window.onload = () => fetchJoke();