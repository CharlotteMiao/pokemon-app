import {
  Container,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
} from "@mui/material";

const PokemonList = ({ pokemons, onSelect, selectedPokemonName }) => {
  console.log("poke", pokemons);
  return (
    <Box sx={{ height: `calc(100vh - 168px)`, overflowY: "auto" }}>
      <List>
        {pokemons.map((pokemon) => (
          <ListItem key={pokemon.name}>
            <ListItemButton
              onClick={() => onSelect(pokemon)}
              selected={pokemon.name == selectedPokemonName}
            >
              <ListItemText primary={pokemon.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default PokemonList;
