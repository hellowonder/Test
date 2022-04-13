import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar2.css'

function NavBar2() {
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    navigate('/', { replace: true })
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="Homealign">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/cart" className="Cartalign">
                Cart
              </NavLink>
            </li>
          </ul>
          <button
            className="btn btn-warning ml-5 d-flex justify-content-end pos"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar2
