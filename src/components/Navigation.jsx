import React from "react"
import { NavLink, Link} from "react-router-dom"

export default function Navigation(){

    return(
      <header>
            <div className="van-life-container">
              <nav>
                <p className="logo"><Link className="nav-link"to="/">#VANLIFE</Link></p>
                <ul>
                  <li><NavLink className={({isActive}) => (isActive ? "active-link nav-link" : "nav-link")} to="/host">Host</NavLink></li>
                  <li><NavLink className={({isActive}) => (isActive ? "active-link nav-link" : "nav-link")} to="/about">About</NavLink></li>
                  <li><NavLink className={({isActive}) => (isActive ? "active-link nav-link" : "nav-link")} to="/vans">Vans</NavLink></li>
                </ul>
              </nav>
            </div>
      </header>
    )
}