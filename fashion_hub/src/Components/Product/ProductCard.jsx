import React from 'react'
// import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <div style={{
        width:"315px",
        height:"529px",
        // whiteSpace:"nowrap",
        overflow:"hidden",
        textAlign:"left",
        padding:"10px",
        // border:"1px solid black",
        margin:"auto",        
    }}>
      <img style={{width:"295px", height:"395px",margin:"auto"}} src={product.image} alt=""/>
      <small>{product.subhead}</small>
      <p style={{fontFamily:"SFHeadingFont", fontWeight:"500", fontSize:"14px"}}>{product.name}</p>
      <p>Rs.{product.price}</p>
    </div>
  )
}
