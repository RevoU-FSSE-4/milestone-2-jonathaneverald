import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeComponent from "./components/HomeComponent";
import PokemonCardComponent from "./components/PokemonCardComponent";
import { PokemonSearchProvider } from "./providers/PokemonSearchProvider";

function App() {
  return (
    <div className="App">
      <PokemonSearchProvider>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/pokemon-card" element={<PokemonCardComponent />} />
        </Routes>
      </PokemonSearchProvider>
    </div>
  );
}

export default App;
