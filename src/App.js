import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

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
    </div>
  )  
}
export default App;
