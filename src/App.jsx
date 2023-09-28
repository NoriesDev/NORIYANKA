import { useState, useEffect } from "react";
// import Fetch-Data from "./Fetch-Data"
// import './App.css';
// import NewsList from "./NewsList";
import NewsList from "./NewsList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiUrl();
  }, []);

  const apiUrl = async () => {
    const url = await fetch("http://hn.algolia.com/api/v1/search?query=");
    const dataFromApi = await url.json();
    setData(dataFromApi.hits);
    console.log(dataFromApi.hits);
  };

  return (
    <>
      <div>
        <ol>
          {/* {data.map((data) => {
            return (
              <li key={data.id}>
                {" "}
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  {data.title}
                </a>
                {" by "}
                {data.author}
              </li>
            );
          })} */}
          <NewsList data={data} />
        </ol>
      </div>
    </>
  );
}

export default App;
