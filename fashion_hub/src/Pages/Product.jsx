import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Filter from '../Components/Product/Filter'
import Navbar from '../Components/Product/Navbar'
import ProductList from '../Components/Product/ProductList'
import Sort from '../Components/Product/Sort'

export default function Product() {
  return (
    <div>
      <Navbar/>
      <div>
        <Heading style={{fontFamily:"Helvetica", fontSize:"42px", textAlign:"center",fontWeight:"300"}}>MEN ALL COTHING</Heading>
          <div>
             <Link to='/'>Home</Link> {">"} Men all cothing
          </div>
      </div>
      <div style={{display:"flex"}}>
        <Filter/>
        <Sort/>
      </div>
      <div>
      <ProductList/>
      </div>
    </div>
  )
}
