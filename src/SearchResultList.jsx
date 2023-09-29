import "./index.css";
import PropTypes from "prop-types";

export default function SearchResultList({ results }) {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        console.log({ result });
        return <a key={id}>{result.title}</a>;
      })}
    </div>
  );
}

SearchResultList.propTypes = {
  results: PropTypes.array.isRequired,
};
