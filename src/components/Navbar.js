import React from 'react'
import { Link, NavLink, withRouter} from "react-router-dom"

const Navbar = (props) => {
  // setTimeout(() => {
  //     props.history.push("/about")
  //   }, 2000);
  return (
    <nav className="nav-wrapper red darken-3">
        <div className="container">
            <a href='/' className='brand-logo'>poke'times</a>
            <ul className="right">
                <li><Link to='/'>home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default withRouter(Navbar)