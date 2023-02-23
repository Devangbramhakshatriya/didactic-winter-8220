import { Input,Button, TagLabel,FormLabel, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct,getProduct } from "../Redux/ProductRedux/action";

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [subhead,setSubhead]=useState("");
  const [image,setImage]=useState("");

  const products = useSelector((store) => {
    return store.product;
  });
  const dispatch = useDispatch();

  useEffect(() =>{
    const productData = products && products.find((el) => el.id===+id)
    if (productData) {
        setName(productData.name);
        setPrice(productData.price);
        setSubhead(productData.subhead)
        setImage(productData.image);
    }
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    let newData = {
      image,
      price,
      name,
      subhead
    };
    setName("");
    setPrice("");
    setSubhead("");
    setImage("");

    dispatch(editProduct(id, newData)).then(() => dispatch(getProduct()));
  };

  return (
    <div style={{width:"50%",margin:"auto"}}>
      <Heading>Edit Product Id: {id}</Heading>
      <div>
        <FormLabel>Image</FormLabel>
        <Input type="url" value={image} onChange={(e) => setImage(e.target.value)}/>
        <FormLabel>Subhead</FormLabel>
        <Input type="text" value={subhead} onChange={(e) => setSubhead(e.target.value)}/>
        <FormLabel>name</FormLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        <FormLabel>price</FormLabel>
        <Input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
      </div>
      <Button onClick={handleEdit}>Submit</Button>
    </div>
  );
};
export default Edit;