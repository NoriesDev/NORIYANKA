import PropTypes from 'prop-types';

export const SearchResult = ({result}) => {
  return (
    <div>{result}</div>
  )
}
SearchResult.propTypes = {
    result: PropTypes.array.isRequired, // Add this line for prop validation
  };