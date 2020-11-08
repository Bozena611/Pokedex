import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App() {
  let abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  let date = new Date().toLocaleDateString();

  const logWhenClicked = () => {
  	console.log("You clicked on the image");
  }
  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked}/>
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon date={date}/>
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  )  
}
export default App;
