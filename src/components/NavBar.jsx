import PropTypes from 'prop-types';

function NavBar({pokemonIndex, setPokemonIndex, length}) {
    
    const handleClickNext = () => {
      setPokemonIndex(pokemonIndex + 1)
    }

    const handleClickPrevious = () => {
        setPokemonIndex(pokemonIndex - 1)
      }

  return (
    <nav>
    {(pokemonIndex > 0) && <button onClick={handleClickPrevious}>Précédent</button>}
    {(pokemonIndex < length - 1) && <button onClick={handleClickNext}>Suivant</button>}
    </nav>
  );
}
NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default NavBar;
