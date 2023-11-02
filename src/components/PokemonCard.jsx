function PokemonCard({pokemon}) {
  console.log(pokemon);

  return ( 
      <figure> { pokemon.imgSrc !== undefined ? 
        <img src={pokemon.imgSrc}></img> : <p>???</p> }
        <figcaption> {pokemon.name} </figcaption>
      </figure> 
    );
  }
  
  export default PokemonCard;
  
  