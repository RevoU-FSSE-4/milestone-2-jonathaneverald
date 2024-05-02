import React from "react";
import { HeaderComponent } from "./HeaderComponent";
import { ShowAllPokemon } from "./ShowAllPokemon";
import { SearchPokemon } from "./SearchPokemon";

export default function HomeComponent() {
  return (
    <>
      <HeaderComponent />
      <SearchPokemon />
      <ShowAllPokemon />
    </>
  );
}
