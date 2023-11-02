import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
  console.log(pokemon);

  return ( 
      <figure> { pokemon.imgSrc !== undefined ? 
        <img src={pokemon.imgSrc}></img> : <p>???</p> }
        <figcaption> {pokemon.name} </figcaption>
      </figure> 
    );
  }
  PokemonCard.PropTypes = {
   pokemmon : PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.url,
   })
  }
  export default PokemonCard;
  
  