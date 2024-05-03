import React, { useState, useEffect, useContext } from "react";
import { HeaderComponent } from "./HeaderComponent";
import { PokemonDetails } from "./PokemonDetails";
import { PokemonSearchContext } from "../providers/PokemonSearchProvider";
import { useNavigate } from "react-router-dom";

const PokemonCardComponent = () => {
  const { pokemon, setPokemon } = useContext(PokemonSearchContext);
  const [pokemonExist, setPokemonExist] = useState<boolean>(true);
  const navigate = useNavigate();

  const searchPokemon = async () => {
    const pokemonName = localStorage.getItem("pokemon");
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

    const response = await fetch(url);
    if (!response.ok) {
      // throw new Error("Failed to search Pokemon");
      setPokemonExist(false);
    }

    const data = await response.json();
    setPokemon({
      name: data.name,
      type: data.types[0].type.name,
      image: data.sprites.other.dream_world.front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      special_atk: data.stats[3].base_stat,
      special_def: data.stats[4].base_stat,
    });
  };

  const onClick = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    searchPokemon();
  }, []);

  return (
    <>
      <HeaderComponent />
      {!pokemonExist && (
        <div className="flex flex-col fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60">
          <svg
            className="animate-spin h-8 w-8 text-white mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>

          <span className="text-white text-3xl font-bold">
            Pokemon {localStorage.getItem("pokemon")} does not exist!
          </span>
          <button
            onClick={onClick}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm m-2 px-5 py-2.5 text-center"
          >
            Back
          </button>
        </div>
      )}
      {pokemonExist && (
        <PokemonDetails
          name={pokemon.name}
          type={pokemon.type}
          image={pokemon.image}
          hp={pokemon.hp}
          attack={pokemon.attack}
          defense={pokemon.defense}
          speed={pokemon.speed}
          special_atk={pokemon.special_atk}
          special_def={pokemon.special_def}
        />
      )}
    </>
  );
};

export default PokemonCardComponent;
