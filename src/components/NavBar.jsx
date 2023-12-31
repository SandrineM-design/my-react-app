import {PropTypes} from 'prop-types';

function NavBar({pokemonList, setPokemonIndex}) {
    
     return (
       <nav>
      {pokemonList.map((pokemon, index) =>
        <button onClick={()=> {
          if (pokemon.name === "pikachu") {
          alert("pika pikachu !!!");
        }
        setPokemonIndex(index)}} key={index}>
      {pokemon.name}
        </button>)}
    </nav>
  );
}
NavBar.propTypes = {
    pokemonList: PropTypes.array.isRequired,
    setPokemonIndex: PropTypes.func.isRequired
}

export default NavBar;