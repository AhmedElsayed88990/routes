import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return <>

    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Products">Products</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>


  </>
}
