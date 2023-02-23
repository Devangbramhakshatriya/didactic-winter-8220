import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Sort = () => {
    const [searchParams, setSearchParams]=useSearchParams();
    const initialorder=searchParams.getAll("order");
    const [order,setOrder]=useState(initialorder || '');
   
    const handleSort=(e)=>{
           console.log(e.target.value);
           setOrder(e.target.value);
    }
    
    useEffect(()=>{
      let params={};
      order && (params.order=order);
      setSearchParams(params);
    },[order])

  return (
    <div>
      <h3>Sort By Price:</h3>
      <div onChange={handleSort}>
        <input type="radio" name='order' value={''} checked={order===''} />
        <label>Best Selling</label>
        <br />
        <input type="radio" name='order' value={'asc'} checked={order==='asc'} />
        <label>Price, low to High</label>
        <br/>
        <input type="radio" name='order' value={'desc'} checked={order==='desc'} />
        <label>Price, High to low</label>
      </div>
    </div>
  )
}

export default Sort;
