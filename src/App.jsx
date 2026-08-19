import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <div>
      <h1 className="titre">Liste des Pokémon</h1>

      <div className="container">
        {pokemons.map((pokemon, index) => (
          <div className="card" key={index}>
            <h2 className="id">ID : {index + 1}</h2>

            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
              alt={pokemon.name}
            />

            <h3>{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
