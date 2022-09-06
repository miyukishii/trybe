import React, { useEffect } from "react";

function BestPokemon() {
// Quando o componente é desmontando deve retornar uma fnção. É o willunmout
  useEffect(() => {
    return () => console.log('Desmontou');
  }, []);

  return(
    <div>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
        alt="skirtle"
        width="250px"
      />
    </div>
  );
}

export default BestPokemon;