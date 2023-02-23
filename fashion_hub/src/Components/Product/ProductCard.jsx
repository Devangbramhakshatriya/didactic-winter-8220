import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <div style={{width:"315px",height:"529px",overflow:"hidden",textAlign:"left",
    padding:"10px",margin:"auto",}}>
      
      <Link to={`/product/${product.id}`}>
      <img style={{width:"295px", height:"395px",margin:"auto"}} src={product.image} alt={product.name}/>
      </Link>
      <small>{product.subhead}</small>
      <p style={{fontFamily:"SFHeadingFont", fontWeight:"500", fontSize:"14px"}}>{product.name}</p>
      <p>Rs.{product.price}</p>
      <Link to={`/product/${product.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  )
}
