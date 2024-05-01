import React, { useState, useEffect } from "react";
import PokemonThumbnail from "./PokemonThumbnail";
import { log } from "console";

interface Pokemons {
  id: string;
  img: string;
  name: string;
  type: string;
}

export const ShowAllPokemon = () => {
  const [allPokemons, setAllPokemons] = useState<any[]>([]);
  const [loadMore, setLoadMore] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const fetchAllPokemons = async () => {
    const response = await fetch(loadMore);
    if (!response.ok) {
      throw new Error("Failed to fetch Pokemon");
    }
    const data = await response.json();
    console.log(data, "LINE 22s");

    setLoadMore(data.next);

    const createPokemonObject = (result: any) => {
      result.forEach(async (pokemon: any) => {
        console.log(pokemon, "pokemon");
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    };
    createPokemonObject(data.results);
    console.log(data.results, "ini data results");

    console.log(allPokemons, "ini all pokemon");
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  return (
    <>
      <div className="pokemon-container ">
        {/* <h1>Pokemon Evolution</h1> */}
        <div className="pokemon-cards w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {allPokemons.map((pokemon, index) => (
            <PokemonThumbnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          ))}
        </div>
        <button className="load-more-pokemons">Load more Pokemons</button>
      </div>
    </>
  );
};
