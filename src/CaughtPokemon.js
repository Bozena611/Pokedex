import React, {useState} from "react";

const CaughtPokemon = (props) => {
  console.log("props date", props);

  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const catchPokemon = () => {
  	//use concat instead of push
    //const list = ["Pikachu", "Eevee", "Raichu", "Glaceon"]
    //const random = list[Math.floor(Math.random() * list.length)];
    if(pokemonNameInput) {
      setCaught(caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    }
  }

  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  }

  return (
  	<div>
  		<p>Caught {caught.length} Pokemon on {props.date}</p>
  		<ul>
  		{caught.map((element, index)=>{
  			return <li key={index}>{element}</li>
  		})}
  		</ul>
      <input 
        type="text" 
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
  		<button onClick={catchPokemon}>Click me</button>
  	</div>
  )
}

export default CaughtPokemon;