import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import './SearchBar.css'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    navigate('/', { replace: true })
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-evenly">
        <div>
          <NavLink to="/showcategory" className="Homealign">
            Show Category
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="Homealign">
            Home
          </NavLink>
        </div>
        <div>
          {sessionStorage.getItem('token') ===
          'e3926b5d-c69b-4130-96eb-3ef6a7e07527' ? (
            <NavLink to="/admin" className="Homealign me-5">
              Admin
            </NavLink>
          ) : (
            <NavLink to="/signup" className="Homealign">
              SignUp
            </NavLink>
          )}
        </div>
        <div>
          {sessionStorage.getItem('token') ? (
            <NavLink to="/cart" className="Cartalign">
              Cart
            </NavLink>
          ) : null}
        </div>
        <div>
          {sessionStorage.getItem('token') ? (
            <button
              onClick={handleLogout}
              className="btn btn-dark me-4 text-light Homealign"
            >
              Sign Out
            </button>
          ) : (
            <div>
              <NavLink to="/login" className="Homealign me-5">
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
