import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
render() {
    return (
        <div className='pokedex'>
            {
                pokemons.map((pokemon) => 
                <Pokemon 
                key={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                averageWeight={pokemon.averageWeight}
                image={pokemon.image}
                />
                )
            }
        </div>
    )
}
}

export default Pokedex;