import {Link} from 'react-router-dom'

import './index.css'

const NavItem = props => {
  const {activePath, routeDetails} = props
  const {routeId, path} = routeDetails
  /* const CallSelectTabFunc = () => {
    selectTabFunc(routeId)
  } */
  const highlightRoute = activePath === path ? 'highlight-item' : ''

  return (
    <Link to={path} className="link">
      <li className={`item ${highlightRoute}`}>{routeId}</li>
    </Link>
  )
}
export default NavItem
