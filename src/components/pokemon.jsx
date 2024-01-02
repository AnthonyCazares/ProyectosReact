import React, { useState, useEffect } from "react";
import "/src/index.css"; // Importa el archivo de estilos

const PokemonViewer = () => {
  const [pokemon, setPokemon] = useState(null);

  const fetchRandomPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();

      const randomPokemonId = Math.floor(Math.random() * 500);
      const randomPokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
      );
      const randomPokemonData = await randomPokemonResponse.json();

      setPokemon(randomPokemonData);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  const handleGenerateRandomPokemon = () => {
    fetchRandomPokemon();
  };

  return (
    <div id="pokemon">
      {pokemon ? (
        <div className="pokimon">
          <h2>Random pokemon generator</h2>

          <div className="pokemon-card">
            <h5 className="aidi">#{pokemon.id}</h5>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="pokemon-image"
            />
            <div className="pokemon-info">
              <h1>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </h1>
            </div>
          </div>
          <button
            className="button-pokimon"
            onClick={handleGenerateRandomPokemon}
          >
            Generate pokemon
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonViewer;
