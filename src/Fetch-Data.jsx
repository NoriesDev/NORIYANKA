import { useState } from "react";

function Fetch-Data({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.objectID}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
          {' by '}
          {item.author}
        </li>
      ))}
    </ul>
  );
}

export default Fetch-Data;

