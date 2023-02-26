import { Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Filter from '../Components/Product/Filter'
import Navbar from '../Components/Product/Navbar'
import ProductList from '../Components/Product/ProductList'
import logo from '../Components/Product/image/row.png'

export default function Product() {
  return (
    // whole container
    <>
      <div>
        <Heading style={{fontFamily:"Helvetica", fontSize:"42px", textAlign:"center",fontWeight:"500",margin:"30px",lineHeight:"28px",
          textTransform:"uppercase"}}>MEN ALL CLOTHING</Heading>
          <div style={{fontWeight:"500", fontSize:"14px",margin:"-10px 0px 60px 0px"}}>
             <Link to='/'>Home</Link> {">"} Men all cothing
          </div>
      </div >

      {/* sort and filter container */}
      <div  style={{ display:"flex",paddingLeft:"3.2%",width:"100%"}}>
        <Filter/>
        <img style={{marginLeft:"63%", cursor:"pointer"}} src={logo} alt=''/>
      </div>
      
      <div>
      <ProductList/>
      </div>
    </>
  )
}
