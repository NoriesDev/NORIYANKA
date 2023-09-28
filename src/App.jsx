import { useState, useEffect } from "react";
import NewsList from "./NewsList";
import classes from "./App.module.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <div>
        {loading ? <h2 className={classes.h2}></h2> : <NewsList data={data} />}
      </div>
    </>
  );
}

export default App;
