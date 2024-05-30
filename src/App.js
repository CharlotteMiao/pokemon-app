import "./App.css";
import { Container, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import PokemonImage from "./components/PokemonImage";
import SearchBar from "./components/SearchBar";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemonList);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = await getPokemon();
      setPokemonList(pokemons);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const newFilteredPokemons = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchField)
    );
    setFilteredPokemons(newFilteredPokemons);
  }, [searchField, pokemonList]);

  const getPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    return data.results;
  };

  const getPokemonDetails = async (url) => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  };

  const handleSelection = async (pokemon) => {
    if (selectedPokemon && selectedPokemon.name == pokemon.name) {
      setSelectedPokemon(null);
    } else {
      const data = await getPokemonDetails(pokemon.url);
      setSelectedPokemon(data);
    }
  };

  const handleSearch = (value) => {
    const searchFieldString = value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <Container sx={{ border: "1px solid grey", borderRadius: "16px" }}>
      <Typography variant="h3" sx={{ margin: "10px 16px" }}>
        Pokémon
      </Typography>
      <SearchBar onSearchChange={handleSearch} />
      <Grid container spacing={2}  sx={{ height: `calc(100vh - 150px)`, }}>
        <Grid item xs={12} sm={selectedPokemon ? 6 : 12}>
          <PokemonList
            pokemons={filteredPokemons}
            onSelect={handleSelection}
            selectedPokemonName={selectedPokemon ? selectedPokemon.name : ""}
          ></PokemonList>
        </Grid>
        <Grid item xs={12} sm={6}>
          {selectedPokemon && (
            <PokemonImage selectedPokemon={selectedPokemon}></PokemonImage>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
