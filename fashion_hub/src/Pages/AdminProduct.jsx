import { Heading,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Filter from '../Components/Product/Filter'
import AdminList from '../Components/Product/AdminList'
import logo from '../Components/Product/image/row.png'
import '../CSS/Product.css'
// import Navbar from '../Components/Navbar/Navbar'

export default function AdminProduct() {
  
  return (
    // whole container
    <>
    {/* <Navbar/> */}
      <div>
        <Heading className="product-heading">MEN ALL CLOTHING</Heading>
        <div className="product-breadcrumbs">
          <Link to='/'>Home</Link> {">"} Men all clothing
        </div>
      </div>

      {/* sort and filter container */}
      <div className="product-filters-container">
        <Filter />
        <img className="product-logo" src={logo} alt=''/>
      </div>
      <div>
        <Link to='/adminpage'>
         <Button>
          Add new product
         </Button>
        </Link>
      </div>
      <div>
        <AdminList/>
      </div>
    </>
  )
}
