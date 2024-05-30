import React from "react";
import { Card, Box, CardMedia, CardHeader } from "@mui/material";

const PokemonImage = ({ selectedPokemon }) => {
  return (
    <Box sx={{ height: `calc(100vh - 168px)`, overflowY: "auto" }}>
      <Card>
        <CardHeader title={selectedPokemon.name} />
        <CardMedia
          component="img"
          image={selectedPokemon.sprites.other.dream_world.front_default}
          alt={selectedPokemon.name}
          style={{ objectFit: "cover" }}
        />
      </Card>
    </Box>
  );
};
export default PokemonImage;
