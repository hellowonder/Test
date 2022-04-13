import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartList from './CartList'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Addmin.css'
import NavBar2 from './NavBar2'
function AdminCategory() {
  const navigate = useNavigate()
  return (
    <>
      <NavBar2></NavBar2>
      <div>
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
              <b>To add category click on</b>
            </div>
            <div className="col-md-3">
              <input
                type="button"
                value="Add Category"
                onClick={() => navigate('/admin/products/addcategory')}
                className="CategoryButton"
              />
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row MarginTop">
            <div className="col-md-3"></div>

            <div className="col-md-3 TextClass">
              <b>To view category list click on</b>
            </div>
            <div className="col-md-3">
              <input
                type="button"
                value="Category List"
                onClick={() => navigate('/admin/category/categorylist')}
                className="CategoryButton"
              />
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row MarginTop">
            <div className="col-md-3"></div>

            <div className="col-md-3 TextClass">
              <b>To go back to previous page</b>
            </div>
            <div className="col-md-3">
              <input
                type="button"
                value="Back"
                onClick={() => navigate(-1)}
                className="BackButton"
              />
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row"></div>
        </div>
      </div>
    </>
  )
}

export default AdminCategory
