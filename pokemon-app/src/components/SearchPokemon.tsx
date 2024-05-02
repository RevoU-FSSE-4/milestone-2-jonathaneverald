import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchPokemon = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage.setItem("pokemon", pokemonName);
    setTimeout(() => {
      navigate("/pokemon-card");
    }, 1500);
  };

  return (
    <div className="bg-pokemon-blue border-gray-200 px-4 lg:px-6 py-2.5 flex flex-wrap justify-center items-center">
      <div className="flex flex-col items-center justify-center px-6 py-8">
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Search Pokemon
        </label>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-m rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5"
        />
        <button
          onClick={onSubmit}
          className="text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm m-2 px-5 py-2.5 text-center"
        >
          Search
        </button>
      </div>
    </div>
  );
};
