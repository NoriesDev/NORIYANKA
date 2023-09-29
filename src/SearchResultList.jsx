import "./index.css";
import PropTypes from 'prop-types';

export default function SearchResultList ({results}) {
  return (
    <div className="results-list">
      {results.map((result, id) => (
        <a className="each-result" href="#" key={id}>
          {result.title}
        </a>
      ))}
    </div>
  )
}

SearchResultList.propTypes = {
    results: PropTypes.array.isRequired, 
  };