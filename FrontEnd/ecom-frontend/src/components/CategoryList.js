import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap'
import NavBar2 from './NavBar2'
import './margin.css'

function CategoryList() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:8080/category/list')
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
      <h1 className="d-flex justify-content-center">CATEGORIES</h1>
      <div>
        <Row xs={1} md={4} className="g-4">
          {data.map((info) => (
            <Col>
              <Card
                style={{ width: '18rem' }}
                className="p-3 m-1 border border-warning"
              >
                <Card.Img src={info.imageUrl} className="rightmargin" />
                <Card.Body>
                  <Card.Title>Name : {info.categoryName}</Card.Title>
                  <Card.Text>
                    Desc : {info.description.substring(0, 100)}
                  </Card.Text>
                  <Link
                    to={{
                      pathname: '/category/product/' + info.id,
                    }}
                  >
                    <Button variant="warning">Show Product By Category</Button>
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

export default CategoryList
