/* eslint-disable react/prop-types */
import classes from "./NewsList.module.css";
function NewsList({ data }) {
  return (
    <ol className={classes.backgroundColor}>
      {data.map((item) => (
        <li key={item.objectID} className={classes.li}>
          <h4 className={classes.h4}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </h4>
          <p>
            (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.p}
            >
              {item.url}
            </a>
            ) {" by "}
            {item.author}
          </p>
        </li>
      ))}
    </ol>
  );
}
export default NewsList;
