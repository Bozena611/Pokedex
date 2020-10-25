import React from "react";

const CaughtPokemon = (props) => {
  console.log("props date", props);
  return <p>Caught 0 Pokemon on {props.date}</p>
}

export default CaughtPokemon;