import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeComponent from "./components/HomeComponent";
import PokemonCardComponent from "./components/PokemonCardComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/pokemon-card" element={<PokemonCardComponent />} />
      </Routes>
    </div>
  );
}

export default App;
