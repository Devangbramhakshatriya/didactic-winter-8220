import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getProduct } from '../../Redux/ProductRedux/action';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const products = useSelector((store) => {
    return store.product;
  });

  const dispatch = useDispatch();

  const obj = {
    params: {}
  };

  const category = searchParams.getAll("category");
  if (category.length > 0) {
    obj.params.category = category;
  }

  const order = searchParams.get("order");
  if (order) {
    obj.params._sort = 'price';
    obj.params._order = order;
  }

  useEffect(() => {
    dispatch(getProduct(obj));
  }, [location.search]);

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
