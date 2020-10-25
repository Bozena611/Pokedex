import React from "react";


const Logo = () => {
  const appName ="Pokedex";

  return (
    <header>
      <h1>Welcome to {appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
    </header>
    )
}

const BestPokemon = () => {
  let abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability) => {
          return(
            <li>{ability}</li>
          )
          })}
      </ul>
    </div>
  )
}

const CaughtPokemon = () => {
  let date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {date}</p>
}

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  )  
}
export default App;
