import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap'
import Navbar from './Navbar'
import NavBar2 from './NavBar2'
import './margin.css'

function ShowProductInCategory() {
  const [data, setData] = useState([])
  const params = useParams()
  const id = params.id
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
      <h1 className="m-3">PRODUCTS : </h1>
      <div>
        <Row xs={1} md={4} className="g-4">
          {data
            .filter((info) => {
              if (info.categoryId == id) {
                return info
              } else {
                return 0
              }
            })
            .map((info) => (
              <Col>
                <Card
                  style={{ width: '18rem' }}
                  className="p-2 m-2 border border-warning"
                >
                  <Card.Img src={info.imageURL} className="rightmargin" />
                  <Card.Body>
                    <Card.Title>Name : {info.name}</Card.Title>
                    <Card.Text>Desc : {info.description}</Card.Text>
                    <Card.Text text="danger">Price : {info.price}</Card.Text>

                    <Link
                      to={{
                        pathname: '/product/productdetails/' + info.id,
                      }}
                    >
                      <Button variant="warning">Show Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  )
}

export default ShowProductInCategory
