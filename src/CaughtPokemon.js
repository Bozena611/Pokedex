import React, {useState} from "react";

const CaughtPokemon = (props) => {
  console.log("props date", props);

  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
  	//use concat instead of push
  	setCaught(caught.concat("Pokemon"));
  }

  return (
  	<div>
  		<p>Caught {caught.length} Pokemon on {props.date}</p>
  		<ul>
  		{caught.map((element, index)=>{
  			return <li key={index}>{element}</li>
  		})}
  		</ul>
  		<button onClick={catchPokemon}>Click me</button>
  	</div>
  )
}

export default CaughtPokemon;