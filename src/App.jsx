import PokemonCard from './components/PokemonCard'
import './App.css'
import { useState } from 'react';
import NavBar from './components/NavBar';
import { useEffect } from 'react';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
 const [pokemonIndex, setPokemonIndex] = useState(0);

 useEffect(
    () => {
      alert("Hello pokemon trainer :)");
    },
    []
  );

  return (
    <>
    <div><PokemonCard pokemon={pokemonList[pokemonIndex]}/></div>
    <NavBar setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex} length={pokemonList.length} pokemonList={pokemonList} />
    </>
  )
}

export default App;
