import React from "react";


function Logo() {
  return (
    <header>
      <h1>Welcome to Pokedex</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
    </header>
    )
}

function BestPokemon(){
  return <p>My favourite Pokemon is Squirtle</p>
}

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
    </div>
  )  
}
export default App;
