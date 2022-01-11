import React from 'react'
import NasaLogo from '../images/nasa logo.png'
class Header extends React.Component {
  state = {
    navItems: ['Home', 'Search', 'Library'],
    mappedNavItems: []
  }

  componentDidMount(){
    this.setState({mappedNavItems: this.state.navItems.map(this.mapNavItems)})
  }

  // Map through the currrent items in state to get navbar, set up like this in order
  // to add in the future if necessary
   mapNavItems = (navItem) => {
    return <li key={navItem} className="nav-item">
    <a style={{'textDecoration': 'none'}} href="#" className="nav-link">
      {navItem}
    </a>
  </li>
  }
  render(){
    return(
      <div className="container">
  <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a
      href="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
    >
      <svg className="bi me-2" width={40} height={32}>
        <use xlinkHref="#bootstrap" />
      </svg>
      <span className="fs-4"><img width={32} height={32} className='rounded-circle' src={NasaLogo} alt='Nasa Logo' />{' '}NASA Image Search</span>
    </a>
    <ul className="nav nav-pills">
     {this.state.mappedNavItems}
    </ul>
  </header>
</div>

    )
  }
}

export default Header