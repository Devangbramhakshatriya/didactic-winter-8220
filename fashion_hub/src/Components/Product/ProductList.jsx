import { Button, Heading,Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getProduct } from '../../Redux/ProductRedux/action';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const products = useSelector((store) => {
    return store.product.product;
  });

  const dispatch = useDispatch();

  let obj={
    params:{
        category:searchParams.getAll("category"),
        _sort:searchParams.getAll('order') && 'price',
        _order:searchParams.get("order"),
    }
}

  useEffect(() => {
    dispatch(getProduct(obj));
  }, [location.search]);

  return (
    <>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, max-content))",
        gridTemplateRows: "repeat(auto-fill)",
        justifyContent:"center",
        gridGap: "20px 0px",
        margin:"auto"
      }}
    >
      {products && products.length > 0
        ? products.map((el) => {
          return <ProductCard key={el.id} product={el} />;
        })
        : <div style={{display:"flex"}}>
          <Heading>Loading...</Heading>
          <Spinner
        margin='auto'
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
        </div>}
    </div>
    <div style={{ display: "flex",alignItems: "center",justifyContent: "center",marginTop: "20px", gap:"10px"}}>
      <Button borderRadius={"50%"}>1</Button>
      <Button variant={'unstyled'}>2</Button>
      <Button variant={'unstyled'}>3</Button>
      <Button variant={'unstyled'}>...</Button>
      <Button variant={'unstyled'}>13</Button>
      <Button variant={'unstyled'}>{">>"}</Button>
    </div>
    </>
  );
};

export default ProductList;
