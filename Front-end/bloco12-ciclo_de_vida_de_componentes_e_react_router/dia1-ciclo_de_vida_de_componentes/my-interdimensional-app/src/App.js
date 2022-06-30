import React from 'react';
import Joke from './components/Joke.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetchJoke = this.fetchJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
      characters: [],
    }
  }

  fetchCharacter = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(responde => responde.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  async fetchJoke() {
    this.setState(
      { loading: true },
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' }}
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          jokeObj: requestObject
        });
      }
    );
  }

  componentDidMount() {
    this.fetchCharacter();
    this.fetchJoke();
  }

  saveJoke = () => {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));
    this.fetchJoke();
  }
  render() { 
    const { characters, storedJokes, loading, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div className="App">
        <h1>Personagens de Ricky and Morty</h1>
        <div>
          {characters.map(({ name, image }) => {
            return(
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
        <h2>Banco de piadas</h2>
        <span>
          {storedJokes.map(({ id, joke }) => (
            <p key={id}>{joke}</p>
          ))}
        </span>
        {
          loading
          ? loadingElement
          : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
        }
    </div>
    );
  }
}

export default App;
