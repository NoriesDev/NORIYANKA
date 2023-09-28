import SearchBar from "./Search-Bar";
import Footer from "./Footer"
import { createTheme, ThemeProvider} from "@mui/material";
import {orange} from "@mui/material/colors";
import {useState, useEffect} from 'react';
import SearchResultList from "./SearchResultList";
import "./index.css";

function App() {
const [results, setResult] = useState([]);

  useEffect(() => {
    fetch('http://hn.algolia.com/api/v1/search?query=')
    .then((success) => success.json())
    .then((success) => setResult(success.hits))
  }, [])

  const theme = createTheme({
    palette: {
      primary:{
        main: orange[700]
      }
    }});



  return (
    <ThemeProvider theme={theme}>
      <div>
      <SearchBar setResults={setResult}/>
      <SearchResultList results={results}/>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default App
