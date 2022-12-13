import {Link} from 'react-router-dom'

import './index.css'

const NotFoundPage = () => (
  <div className="notfound-page-container">
    <div className="notfound-page-content-container">
      <img
        src="https://res.cloudinary.com/dawykjhkh/image/upload/v1670669868/Group_7484pagenotFound_sfaoy2.png"
        alt="Not Found"
        className="not-found-img"
      />
      <h1 className="page-heading">PAGE NOT FOUND</h1>
      <p className="page-not-found-description">
        we’re sorry, the page you requested could not be found Please go back to
        the homepage
      </p>
      <Link to="/">
        <button className="not-found-button" type="button">
          Home
        </button>
      </Link>
    </div>
  </div>
)

export default NotFoundPage
