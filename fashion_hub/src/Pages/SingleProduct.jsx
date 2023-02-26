import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {IoIosArrowForward} from 'react-icons/io'
import{FaEye} from 'react-icons/fa'
import size from '../Components/Product/image/size.png'
import {RiSubtractFill} from 'react-icons/ri'
import {IoMdAdd} from 'react-icons/io'
import {BsShare} from 'react-icons/bs'
import {BsQuestionCircle,BsStar} from 'react-icons/bs'
import ProductCard from "../Components/Product/ProductCard";
import { Box, Button } from "@chakra-ui/react";

const initialValue=1;

export default function SingleProduct() {
  const [count, setCount] = useState(initialValue);
  
  const { id } = useParams();
  console.log(id,"id");
  const products = useSelector((store) => {
    return store.product.product;
  });

  console.log(products,"hjkl")
  const [data, setData] = useState("");

  useEffect(() => {
    const productData = products && products.find((el) => el.id===+id)
    console.log(productData,"se")
    if(productData){
      setData(productData);
    }
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

   const n=Math.ceil(Math.random()*6);
  return (
    <>
    <div style={{display:"flex", margin:"auto", justifyContent:"center", fontSize:"14px", fontFamily:"Helvetica",fontWeight:"500"}}>
        <span><Link to='/'>Home</Link></span>
        <IoIosArrowForward style={{margin:"4px 5px 0px 5px"}}/>
        <span><Link to='/'>all men products</Link></span>
        <IoIosArrowForward style={{margin:"4px 5px 0px 5px"}}/>
        <span style={{textTransform:"lowercase"}}>{data.name}</span>
      </div>
    <div style={{width:"auto",display:"flex",fontFamily:"Helvetica"}}>
     <div style={{padding:"40px 25px 0px 100px"}}>
     <img  style={{width:"480px", height:"640px"}} src={data.image} alt="" />
     </div>
     
     <div style={{marginTop:"80px", textAlign:"left"}}>
         <p style={{fontSize:"26px", lineHeight:"42px"}}>{data.name}<Button float={'right'} fontSize={'24px'}
         variant={'unstyled'} padding={'6px'} border={'1px solid black'} borderRadius={'50%'}><BsStar/></Button></p>
         <p style={{fontSize:"26px", lineHeight:"42px"}}>RS. {data.price}</p>
         <p style={{color:"grey", fontSize:"14px", lineHeight:"21px"}}>Tax included.</p>
         <div style={{margin:"20px 0px 20px 0px"}}>
         <p style={{color:"", fontSize:"14px", lineHeight:"21px",display:"inline-flex"}}><FaEye style={{margin:"2px 5px 0px 5px",fontSize:"18px"}}/> {n} people are viewing this right now</p>
         </div>
         
         <p><span style={{fontWeight:"600"}}>Size</span>:M</p>
         <img style={{cursor:"pointer", margin:"10px 0px 20px 0px"}} src={size} alt="" />
         <div>
          <p style={{fontWeight:'600', fontSize:"14px",margin:"30px 0px 15px 0px"}}>Quantity</p>
          <div style={{display:"flex",height:'44px',gap:"10px"}}>
            <Box style={{display:"flex", border:"1px solid grey"}}>
               <Button variant={'unstyled'} padding={"10px"} onClick={handleDecrement}><RiSubtractFill/></Button>
                  <p style={{ padding:"10px"}}>{count}</p>
               <Button padding={"10px"} variant={'unstyled'} onClick={handleIncrement}><IoMdAdd/></Button>
            </Box>
             <Button width={'440px'} variant={'unstyled'} border={'1px solid black'} height={'44px'} 
             _hover={{backgroundColor:"black",color: "white"}}>Add to cart</Button>
          </div>
        <Button width={'562px'} variant={'unstyled'} border={'1px solid black'} height={'44px'} backgroundColor={'black'} color={'white'}
        _hover={{backgroundColor:"white",color: "black"}} margin='20px 0px 10px 0px'>BUY IT NOW</Button>
        </div>
        <div style={{display:"flex",marginTop:"50px", fontSize:"14px"}}>
        <BsQuestionCircle fontSize={'20px'}/>
        <p style={{display:"flex",padding:'0px 10px 0px 10px'}}>Ask a question</p>
        <BsShare fontSize={'15px'}/>
        <p style={{display:"flex",padding:'0px 10px 3px 10px'}}>Share</p>
        </div>
        <div style={{width:"562px", borderTop:".5px solid grey",marginTop:"5px"}}></div>
     </div>
    </div>
    <div>

      <div style={{borderBottom:".5px solid grey",display:"flex",justifyContent:"center",gap:"30px",width:"80%",margin:"auto",marginTop:"80px"}}>
        <p style={{fontWeight:"700",borderBottom:"3px solid black"}}>Product description</p>
        <p style={{fontWeight:"700",color:"grey"}}>Shipping & Return</p>
        <p style={{fontWeight:"700",color:"grey"}}>Material & care</p>
      </div>
      <div style={{textAlign:"left",width:"80%",margin:"auto",marginTop:"50px",color:'grey',marginBottom:"80px",lineHeight:"30px",
       fontSize:"14px"}}>
        <li>Relax Fit Tee</li>
        <li>Crew Neck</li>
        <li>Rib Finish at Neckline</li>
        <li>Brand Logo Print at the Centre Front</li>
        <li>Premium Quality Fabric</li>
        <li>Model wears size L and is 6'2</li>
      </div>
    </div>
    </>
  );
}
