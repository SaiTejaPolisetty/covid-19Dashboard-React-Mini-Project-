import {Link} from 'react-router-dom'

import './index.css'

const NavItem = props => {
  const {activeRouteId, selectTabFunc, routeDetails} = props
  const {routeId, path} = routeDetails
  const CallSelectTabFunc = () => {
    selectTabFunc(routeId)
  }
  const highlightRoute = activeRouteId === routeId ? 'highlight-item' : ''

  return (
    <Link to={path} className="link">
      <li className="item">
        <button
          className={`nav-route-btn ${highlightRoute}`}
          type="button"
          onClick={CallSelectTabFunc}
        >
          {routeId}
        </button>
      </li>
    </Link>
  )
}
export default NavItem
