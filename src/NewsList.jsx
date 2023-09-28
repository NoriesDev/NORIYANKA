/* eslint-disable react/prop-types */
// import { useState } from "react";
function NewsList({ data }) {
  return (
    <ol>
      {data.map((item) => (
        <li key={item.objectID}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
          {" by "}
          {item.author}
        </li>
      ))}
    </ol>
  );
}
export default NewsList;
