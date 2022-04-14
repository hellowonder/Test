import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap'
import Navbar from './Navbar'
import NavBar2 from './NavBar2'
import './margin.css'

function AdminProductList() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:8080/product/')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((error) => {
        console.log(error)
        alert('something went wrong')
      })
  }, [])
  const navigate = useNavigate()
  return (
    <div>
      <NavBar2></NavBar2>
      <div>
        <h1 className="d-flex justify-content-center">PRODUCTS </h1>
        <div>
          <Row xs={1} md={4} className="g-4">
            {data.map((info) => (
              <Col>
                <Card
                  style={{ width: '18rem' }}
                  className="p-3 m-1 border border-warning"
                >
                  <Card.Img src={info.imageURL} className="rightmargin" />
                  <Card.Body>
                    <Card.Title>Name : {info.name}</Card.Title>
                    <Card.Text>Desc : {info.description}</Card.Text>
                    <Card.Text text="danger">Price : {info.price}</Card.Text>

                    <Link
                      to={{
                        pathname: '/admin/products/updateproducts/' + info.id,
                      }}
                    >
                      <Button variant="warning">Update Product</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default AdminProductList
