import React, { useState, useEffect } from 'react';
import BestPokemon from './components/BestPokemon';
import useTimer from './hooks/userTimer';
import './index.css';

function App() {

  const { number, isMultiple, timer } = useTimer();

  const [ pokemons, setPokemonList ] = useState([]);
  const [ limit, setLimit ] = useState(10);
  const [ visible, setVisible ] = useState(false);

  const handleButton = () => {
    setLimit((prev) => prev + 10);
  }

  // Quando quero fazer um didMount, eu passo uma callback e uma lista [] vazia.
  useEffect( () => {
    const fetchPokemons = async () => {
      const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
      const { results } = await fetch(endpoint)
      .then((response) => response.json());
      // console.log(results);
      setPokemonList(results);
    };
    fetchPokemons();
  }, [limit]);

  return (
    <main>
      <section>
        <h1>Pokemon List</h1>
        <div className='App'>
          <p>{`Número aleatório: ${number}`}</p>
          <p>{isMultiple && 'Acerto'}</p>
          <p>Tempo: { timer }</p>
        </div>
        <div>
          <button
            type='button'
            onClick={ handleButton }
          >
            Buscar mais Pokemons
          </button>
          <button
            type='button'
            onClick={ () => setVisible(!visible) }
          >
            Mostrar o melhor Pokemon do mundo
          </button>
          {
            visible && <BestPokemon />
          }
          <ul>
            {
              pokemons.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
              ))
            }
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
