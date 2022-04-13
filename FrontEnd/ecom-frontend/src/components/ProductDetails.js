import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Fragment } from 'react/cjs/react.production.min'
import * as yup from 'yup'
import NavBar2 from './NavBar2'

function ProductDetails() {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id
  const [productname, setProductName] = useState('')
  const [imageurl, setImageUrl] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [categoryId, setCategoryId] = useState('')

  console.log({ productname, imageurl, price, description })

  useEffect(() => {
    getProductDetails()
  }, [])

  const getProductDetails = async () => {
    console.log(id)
    let result = await fetch(`http://localhost:8080/product/product/${id}`)
    result = await result.json()
    console.warn(result)

    setProductName(result[0].name)
    setImageUrl(result[0].imageURL)
    setPrice(result[0].price)
    setDescription(result[0].description)
    setCategoryId(result[0].categoryId)
  }

  const defaultValue = {
    quantity: '',
  }

  const validationSchema = yup.object().shape({
    quantity: yup
      .number()
      .required('Please Enter Quantity')
      .test(
        'Is positive?',
        'ERROR: The number must be greater than 0!',
        (value) => value > 0,
      ),
  })

  const handleOnSubmit = (values) => {
    console.log('values', values)
    const token = sessionStorage.getItem('token')
    if (token) {
      axios
        .post(`http://localhost:8080/cart/add?token=${token}`, {
          productId: id,
          quantity: values.quantity,
        })
        .then((res) => {
          alert(res.data.message)
          console.log(res.data.message)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      alert('Log in first')
    }
  }

  const handleCart = () => {
    const token = sessionStorage.getItem('token')
    if (token) {
      navigate('/cart')
    } else {
      alert('Log in First')
    }
  }

  return (
    <>
      <NavBar2></NavBar2>
      <div>
        <style>{'body { background-color: #daf2f1; }'}</style>
        <div className="d-flex justify-content-center fs-2 p-3">
          <h1>ProductDetails</h1>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-4 PName d-flex justify-content-center">
            {' '}
            <p>
              <h3>Product Name</h3>
            </p>
          </div>

          <div className="col-md-4 d-flex justify-content-center">
            <p>
              <h3>Description</h3>
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <p>
              <h3>Price</h3>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 PName fs-4 d-flex justify-content-center">
            {' '}
            <p>{productname}</p>
          </div>

          <div className="col-md-4 d-flex justify-content-center">
            <p>{description}</p>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <p>{price}</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center col-md-4 fs-2 p-3">
            <img
              className=""
              width={350}
              height={350}
              src={imageurl}
              alt="product details"
            ></img>
          </div>
          <br></br>
          <div className="col-md-8 justify-content-center">
            Quantity:
            <Fragment>
              <Formik
                initialValues={defaultValue}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
              >
                <Form>
                  <div>
                    <Field
                      type="number"
                      name="quantity"
                      placeholder="Enter Quntity"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="quantity" />
                    </p>
                  </div>

                  <div className="row d-flex justify-content-start">
                    <div className="col">
                      <button className="btn btn-primary mb-1" type="submit">
                        Add to cart
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-primary"
                        onClick={handleCart}
                        type="submit"
                      >
                        Show Cart
                      </button>
                      <br></br>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate(-1)}
                      >
                        Go back
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </Fragment>
          </div>
        </div>
      </div>
      <br></br>
    </>
  )
}

export default ProductDetails
