import { TextField } from "@mui/material";

const SearchBar = ({ onSearchChange }) => {
  return (
    <TextField
      label="Search Pokemon"
      variant="outlined"
      fullWidth
      onChange={(event) => onSearchChange(event.target.value)}
      sx={{ margin: "10px 16px" }}
    />
  );
};

export default SearchBar;
