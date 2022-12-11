import {Link} from 'react-router-dom'
import {BiChevronRightSquare} from 'react-icons/bi'
import './index.css'

const SearchSuggestionsItem = props => {
  const {stateDetails} = props

  return (
    <li className="search-suggestion-container">
      <Link
        to={`/state/${stateDetails.state_code}`}
        className="search-result-link"
      >
        <div className="search-suggestion">
          <h1 className="search-suggestion-name ">{stateDetails.state_name}</h1>

          <button type="button" className="search-button">
            {stateDetails.state_code}
            <BiChevronRightSquare alt="line icon" className="icon-right" />
          </button>
        </div>
      </Link>
    </li>
  )
}

export default SearchSuggestionsItem
