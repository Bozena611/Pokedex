import React from "react";


const Logo = (props) => {
  console.log("props", props)


  const logWhenClicked = () => {
  	console.log("You clicked on the image");
  }

  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Squirtle" onClick={logWhenClicked}/>
    </header>
    )
}

export default Logo;