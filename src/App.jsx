
import NewsList from "./NewsList";
import classes from "./App.module.css";
import SearchBar from "./Search-Bar";
import Footer from "./Footer"
import { createTheme, ThemeProvider} from "@mui/material";
import {orange} from "@mui/material/colors";
import {useState, useEffect} from 'react';
import SearchResultList from "./SearchResultList";
import "./index.css";


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResult] = useState([]);

  useEffect(() => {
    apiUrl();
  }, []);

  const apiUrl = async () => {
    const url = await fetch("http://hn.algolia.com/api/v1/search?query=");
    const dataFromApi = await url.json();
    setData(dataFromApi.hits);
    setLoading(false);
    console.log(dataFromApi.hits);
  };


  const theme = createTheme({
    palette: {
      primary:{
        main: orange[700]
      }
    }});
 


  return (
 <ThemeProvider theme={theme}>
      <SearchBar setResults={setResult}/>
      <SearchResultList className='each-result' results={results}/>
       {loading ? <h2 className={classes.h2}></h2> : <NewsList data={data} />} 
      <Footer />
    </ThemeProvider>

  )

  }

export default App;
