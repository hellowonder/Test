import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Fragment } from 'react/cjs/react.production.min'
import * as yup from 'yup'
import NavBar2 from './NavBar2'

function UpdateProduct() {
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
  })

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
    productname: productname,
    imageURL: imageurl,
    price: price,
    description: description,
  }

  const validationSchema = yup.object().shape({
    productname: yup.string().required('Please Update Product'),
    imageURL: yup.string().required('Please Update Image'),
    price: yup
      .number()
      .required('Please Update product price')
      .test(
        'Is positive?',
        'ERROR: The price must be greater than 0!',
        (value) => value > 0,
      ),
    description: yup.string().required('please update product description'),
  })

  const handleSubmit = (values) => {
    console.log('values', values)
    axios
      .post(`http://localhost:8080/product/update/${id}`, {
        name: values.productname,
        imageURL: values.imageURL,
        price: values.price,
        description: values.description,
        categoryId: categoryId,
      })
      .then((res) => {
        alert(res.data.message)
        console.log(res.data.message)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <NavBar2></NavBar2>
      <Fragment>
        <div className="container d-flex justify-content-center">
          <div className="col-md-8 text-center mt-5 border border-2 border-warning rounded">
            <h1 className="pt-2">Update Product</h1>

            <Formik
              initialValues={defaultValue}
              validationSchema={validationSchema}
              enableReinitialize
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Form>
                  <div className="col-md-12 mt-4 px-3 pt-1">
                    <Field
                      type="text"
                      name="productname"
                      placeholder="Please enter category name"
                      className="form-control border border-1 border-warning"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="productname" />
                    </p>
                  </div>
                  <div className="col-md-12 mt-4 px-3 pt-1">
                    <Field
                      type="text"
                      name="imageURL"
                      placeholder="Please enter image URL"
                      className="form-control border border-1 border-warning"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="imageURL" />
                    </p>
                  </div>

                  <div className="col-md-12 mt-4 px-3 pt-1">
                    <Field
                      type="number"
                      name="price"
                      placeholder="please update price"
                      className="form-control border border-1 border-warning"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="price" />
                    </p>
                  </div>

                  <div className="col-md-12 mt-4 px-3 pt-1">
                    <Field
                      type="text"
                      name="description"
                      placeholder="please enter category description"
                      className="form-control border border-1 border-warning"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="description" />
                    </p>
                  </div>

                  <button className="btn btn-warning mx-5 mb-1" type="submit">
                    Update
                  </button>
                </Form>
              )}
            </Formik>
            <button
              className="btn btn-warning mx-5 mb-1"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </Fragment>
    </div>
  )
}

export default UpdateProduct
