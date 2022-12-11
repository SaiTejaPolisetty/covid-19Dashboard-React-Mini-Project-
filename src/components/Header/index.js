import {Component} from 'react'
import {Link} from 'react-router-dom'
import {ImMenu2} from 'react-icons/im'

import './index.css'

import NavItem from '../NavItem'

const RoutesData = [
  {routeId: 'Home', path: '/'},
  {routeId: 'About', path: '/about'},
  {routeId: 'Vaccination', path: '/vaccination'},
]

class Header extends Component {
  state = {isToggleActive: false, activeTabId: 'Home'}

  showDropDownMenuFunc = () => {
    this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
  }

  selectTabFunc = id => {
    this.setState({activeTabId: id})
  }

  RenderDropDownMenu = () => {
    const {activeTabId} = this.state
    return (
      <ul className="navBar">
        {RoutesData.map(obj => (
          <NavItem
            activeRouteId={activeTabId}
            routeDetails={obj}
            key={obj.routeId}
            selectTabFunc={this.selectTabFunc}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isToggleActive, activeTabId} = this.state

    return (
      <>
        <div className="desktop-header-container">
          <Link to="/" className="link">
            <h1 className="logo">
              COVID19<span className="india">INDIA</span>
            </h1>
          </Link>
          <ul className="navBar">
            {RoutesData.map(obj => (
              <NavItem
                activeRouteId={activeTabId}
                key={obj.routeId}
                routeDetails={obj}
                selectTabFunc={this.selectTabFunc}
              />
            ))}
          </ul>
        </div>
        <div className="mobile-menu">
          <div className="mobile-header-container">
            <Link to="/" className="link">
              <h1 className="logo">
                COVID19<span className="india">INDIA</span>
              </h1>
            </Link>
            <button
              type="button"
              className="toggle-button"
              onClick={this.showDropDownMenuFunc}
            >
              <ImMenu2 className="menuIcon" alt="menu" />
            </button>
          </div>
          <div className="menu">
            {isToggleActive ? this.RenderDropDownMenu() : null}
          </div>
        </div>
      </>
    )
  }
}

export default Header
