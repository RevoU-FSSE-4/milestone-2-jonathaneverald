import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PokemonSearchProvider } from "./providers/PokemonSearchProvider";
import HomePage from "./pages/HomePage";
import PokemonCardPage from "./pages/PokemonCardPage";

function App() {
  return (
    <div className="App">
      <PokemonSearchProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon-card" element={<PokemonCardPage />} />
        </Routes>
      </PokemonSearchProvider>
    </div>
  );
}

export default App;
