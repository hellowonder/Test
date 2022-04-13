import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CartList.css'
import logo from './CART.png'
import NavBar2 from './NavBar2'

function CartList() {
  const [data, setData] = useState([])
  const [totalamount, setTotalAmount] = useState([])
  useEffect(() => {
    let token = sessionStorage.getItem('token')
    axios
      .get(`http://localhost:8080/cart/?token=${token}`)
      .then((res) => {
        setData(res.data.cartItems)
        setTotalAmount(res.data)
      })
      .catch((error) => {
        console.log(error)
        alert('something went wrong')
      })
  }, [])

  function deleteHandler(id) {
    let token = sessionStorage.getItem('token')
    axios.delete(`http://localhost:8080/cart/delete/${id}?token=${token}`)
    console.log(id)
    window.location.reload()
  }

  sessionStorage.setItem('total', `${totalamount.totalCost}`)
  console.log(data)
  console.log(totalamount.totalCost)
  const navigate = useNavigate()
  return (
    <div>
      <NavBar2></NavBar2>
      <style>{'body { background-color: #daf2f1; }'}</style>

      <div className="row">
        <div className="col-md-1">
          <img src={logo} alt="Logo" className="Logo" />
        </div>
        <div className="col-md-5 Header">
          {' '}
          <h2>List of items present in Cart</h2>
        </div>
      </div>
      <div>
        {data.map((info) => (
          <div className="row Ptable">
            <div className="col-md-1  PName">
              <h3> {info.product.name} </h3>
            </div>
            <div className="col-md-2 me-3">
              <img src={info.product.imageURL} alt="product"></img>
            </div>
            <div className="col-md-2">
              <p>Description:{info.product.description}</p>
            </div>
            <div className="col-md-2">
              <p>Qunatity:{info.quantity}</p>
            </div>
            <div className="col-md-2">
              <p>Price:{info.product.price}</p>{' '}
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-danger"
                onClick={() => deleteHandler(info.id)}
              >
                Delete item
              </button>
            </div>
            <hr className="my-3"></hr>
          </div>
        ))}
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5 TotalAmt">
            {' '}
            <p>
              <h4>Total Amount :</h4>
            </p>
          </div>
          <div className="col-md-1 Amt ">{totalamount.totalCost}</div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-6 TotalAmt AddBtn">
            <input
              type="button"
              value="Add Address"
              onClick={() => navigate('/address')}
              className="btn btn-warning"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartList
