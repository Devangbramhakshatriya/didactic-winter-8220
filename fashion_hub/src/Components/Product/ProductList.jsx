import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../Redux/ProductRedux/action';
import ProductCard from './ProductCard';

const ProductList = () => {
    const products = useSelector((store) => {
      return store.product;
    });
  
    const dispatch = useDispatch();
  
    console.log(products, "4");
  
    useEffect(() => {
      dispatch(getProduct());
    }, []);
  
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, max-content))",
          gridTemplateRows: "repeat(auto-fill)",
          gridGap: "10px 0px",
          margin:"auto"
        }}
      >
        {products && products.length > 0
          ? products.map((el) => {
              return <ProductCard key={el.id} product={el} />;
            })
          : <h1>"Loading..."</h1>}
      </div>
    );
  };

export default ProductList;
  