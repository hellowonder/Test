import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Addmin.css'
import NavBar2 from './NavBar2'

function Addmin() {
  const navigate = useNavigate()
  return (
    <div>
      <NavBar2></NavBar2>
      <style>{'body { background-color: #daf2f1; }'}</style>

      <div>
        <div className="row MarginTop">
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-3 TextClass">
            <b>To add and modify products click on</b>
          </div>
          <div className="col-md-3">
            <input
              type="button"
              value="Admin Products"
              onClick={() => navigate('/admin/products')}
              className="ProductButton"
            />
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row MarginTop">
          <div className="col-md-3"></div>

          <div className="col-md-3 TextClass">
            <b>To add and modify category click on</b>
          </div>
          <div className="col-md-3">
            <input
              type="button"
              value="Admin Category"
              onClick={() => navigate('/admin/category')}
              className="CategoryButton"
            />
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  )
}

export default Addmin
