import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./index.css";
import { useState } from "react";
import PropTypes from "prop-types";
import NewsList from "./NewsList";
import SearchResultList from "./SearchResultList";

const url = "https://hn.algolia.com/api/v1/search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const fetchData = () => {
    fetch(url + '?query=' + input)
      .then((response) => response.json())
      .then((json) => {
        //   /* if (json.hits && Array.isArray(json.hits)) {
        //         const result = json.hits.filter((hit) => {
        //           return value && hit && hit.title && hit.title.toLowerCase().includes(value);
        //         });*/
        console.log(json);
        setResults(json.hits);
      })
      .catch((error) => {
        console.error(error);
      });
  };


const handleSubmit = (event) => {
  event.preventDefault()
  fetchData()
};


return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
            }}
          >
            NORIYANKA-NEWS
          </Typography>
          <form onSubmit={handleSubmit}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Type to Search…"
                inputProps={{ "aria-label": "search" }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onSubmit={(e) => handleSubmit(e)}
              ></StyledInputBase>
            </Search>
          </form>
        </Toolbar>
      </AppBar>
      <SearchResultList className='each-result' results={results}/>
      <NewsList data={results} />
    </Box>
  );
}

SearchBar.propTypes = {
  setResults: PropTypes.func.isRequired,
};
