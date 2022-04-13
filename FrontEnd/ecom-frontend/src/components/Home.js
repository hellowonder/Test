import React from 'react'
import CategoryList from './CategoryList'
import Navbar from './Navbar'
import ProductList from './ProductList'
import './Home.css'
import Footer from './Footer'
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <div>
      <div className='d-flex justify-content-evenly '>
        <div className='d-flex justify-content-evenly navbar'>
          <div>
            <Navbar></Navbar>
          </div>
        </div>
      </div>
      
      <ProductList></ProductList>

      <Footer />
    </div>
  )
}

export default Home
