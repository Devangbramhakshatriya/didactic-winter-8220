import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/Product/ProductCard";

export default function SingleProduct() {
  const { id } = useParams();
  console.log(id,"id");
  const products = useSelector((store) => {
    return store.product;
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

  return (
    <div>
      <h1>Single Product {id}</h1>
      <ProductCard product={data}/>
    </div>
  );
}
